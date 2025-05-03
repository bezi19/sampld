using CSharpFunctionalExtensions;
using FastEndpoints;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Sampld.Application.Abstractions.Authentication;
using Sampld.Application.Abstractions.Repositories;
using Sampld.Domain.Entities.Users;
using Sampld.Infrastructure.Common.Persistence;

namespace Sampld.Infrastructure.Persistence.Users;

internal sealed class UserRepository(
    UsersDbContext dbContext,
    ITokenProvider tokenProvider,
    IPasswordHasher passwordHasher) : IUserRepository
{
    private readonly DbSet<User> _users = dbContext.Users;

    public async Task<Maybe<User>> GetUser(string email)
    {
        var user = await _users.SingleOrDefaultAsync(u => u.Email == email);
        return user == null ? Maybe.None : Maybe.From(user);
    }

    public async Task<string> Login(string email, string password)
    {
        var validationContext = ValidationContext.Instance;
        var user = await _users.FirstOrDefaultAsync(x => x.Email == email);

        if (user is null)
            validationContext.ThrowError($"User with email {email} was not found.",
                StatusCodes.Status404NotFound);

        if (user.PasswordHash is null)
            validationContext.ThrowError("Make sure you are logging with a proper service.");

        var verified = passwordHasher.Verify(password, user.PasswordHash!);
        if (!verified)
            validationContext.ThrowError("Invalid email or password.", StatusCodes.Status400BadRequest);

        return tokenProvider.Create(user);
    }

    public async Task<Guid> Add(User user)
    {
        await _users.AddAsync(user);
        await dbContext.SaveChangesAsync();

        return user.Id;
    }

    public async Task<bool> Exists(string email)
    {
        return await _users.AnyAsync(x => x.Email == email);
    }
}