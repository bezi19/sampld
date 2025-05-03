using Sampld.Application.Abstractions.Repositories;
using Sampld.Application.Common;
using Sampld.Domain.Entities.Users;

namespace Sampld.Application.Services;

using static NameSplitter;

public interface IUserService
{
    Task<User> GetOrCreateFromGoogle(string email, string fullName);
}

public class UserService(IUserRepository userRepository) : IUserService
{
    public async Task<User> GetOrCreateFromGoogle(string email, string fullName)
    {
        var user = await userRepository.GetUser(email);
        if (user.HasValue)
            return user.Value;

        var (firstName, lastName) = fullName.SplitFullName();
        var newUser = new User(
            id: Guid.NewGuid(),
            email: email,
            name: firstName,
            lastName: lastName,
            username: email.Split('@')[0],
            passwordHash: null
        )
        {
            Roles = ["User"]
        };
        await userRepository.Add(newUser);
        return newUser;
    }
}