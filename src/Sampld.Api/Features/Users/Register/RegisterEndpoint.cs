using FastEndpoints;
using Sampld.Application.Abstractions.Authentication;
using Sampld.Application.Abstractions.Repositories;
using Sampld.Domain;
using Sampld.Domain.Entities.Users;

namespace Sampld.Api.Features.Users.Register;

internal sealed class RegisterEndpoint(IUserRepository userRepository, IPasswordHasher passwordHasher)
    : Endpoint<RegisterRequest>
{
    public override void Configure()
    {
        Post("/api/register");
        AllowAnonymous();
        Description(d => d.WithTags("Auth"));
    }

    public override async Task HandleAsync(RegisterRequest req, CancellationToken ct)
    {
        var exists = await userRepository.Exists(req.Email);
        if (exists)
            ValidationContext.Instance.ThrowError($"User with email {req.Email} already exists.",
                StatusCodes.Status400BadRequest);

        var userId = await userRepository.Add(new User(Guid.NewGuid(),
            req.Email,
            req.Name,
            req.LastName,
            req.Username,
            passwordHasher.Hash(req.Password)
        )
        {
            Roles = [RoleTypes.User]
        });

        await SendAsync(userId, cancellation: ct);
    }
}