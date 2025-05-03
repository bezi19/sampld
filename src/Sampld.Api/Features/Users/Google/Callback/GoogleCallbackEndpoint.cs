using System.Security.Claims;
using FastEndpoints;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Sampld.Application.Abstractions.Authentication;
using Sampld.Application.Services;

namespace Sampld.Api.Features.Users.Google.Callback;

internal sealed class GoogleCallbackEndpoint(
    IUserService userService,
    ITokenProvider tokenProvider)
    : EndpointWithoutRequest
{
    public override void Configure()
    {
        Get("/api/google/callback");
        AllowAnonymous();
        Description(d => d.WithTags("Google"));
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var result = await HttpContext.AuthenticateAsync(GoogleDefaults.AuthenticationScheme);

        if (!result.Succeeded || result.Principal is null)
        {
            await SendUnauthorizedAsync(ct);
            return;
        }

        var email = result.Principal.FindFirstValue(ClaimTypes.Email);
        var name = result.Principal.FindFirstValue(ClaimTypes.Name);

        if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(name))
        {
            await SendUnauthorizedAsync(ct);
            return;
        }

        var user = await userService.GetOrCreateFromGoogle(email, name);
        var token = tokenProvider.Create(user);

        var returnUrl = result.Properties?.Items.TryGetValue("returnUrl", out var url) == true
            ? url
            : "/";

        HttpContext.Response.Cookies.Append("access_token",
            token,
            new CookieOptions
            {
                HttpOnly = false,
                Secure = true,
                SameSite = SameSiteMode.None,
                Expires = DateTimeOffset.UtcNow.AddDays(7)
            });

        await SendRedirectAsync($"http://localhost:5173{returnUrl}", isPermanent: false, allowRemoteRedirects: true);
    }
}