using CSharpFunctionalExtensions;
using Sampld.Domain.Entities.Users;

namespace Sampld.Application.Abstractions.Repositories;

public interface IUserRepository
{
    Task<Maybe<User>> GetUser(string email);
    Task<string> Login(string email, string password);
    Task<Guid> Add(User user);
    Task<bool> Exists(string email);
}