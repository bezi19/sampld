using FastEndpoints;
using Sampld.Application.Abstractions.Repositories;

namespace Sampld.Api.Features.Users.Login;

internal sealed class LoginEndpoint(IUserRepository userRepository) : Endpoint<LoginRequest>
{
    public override void Configure()
    {
        Post("/api/login");
        AllowAnonymous();
        Description(d => d.WithTags("Auth"));
    }

    public override async Task HandleAsync(LoginRequest req, CancellationToken ct)
    {
        var token = await userRepository.Login(req.Email, req.Password);
        await SendAsync(new { req.Email, Token = token }, cancellation: ct);
    }
}