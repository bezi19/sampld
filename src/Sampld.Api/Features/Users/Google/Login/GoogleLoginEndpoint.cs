using FastEndpoints;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;

namespace Sampld.Api.Features.Users.Google.Login;

internal sealed class GoogleLoginEndpoint : Endpoint<GoogleLoginRequest>
{
    public override void Configure()
    {
        Get("/api/google/login");
        AllowAnonymous();
        Description(d => d.WithTags("Google"));
    }

    public override async Task HandleAsync(GoogleLoginRequest req, CancellationToken ct)
    {
        var properties = new AuthenticationProperties
        {
            RedirectUri = "/api/google/callback",
            Items = { { "returnUrl", req.ReturnUrl } }
        };

        await HttpContext.ChallengeAsync(GoogleDefaults.AuthenticationScheme, properties);
    }
}