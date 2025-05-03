using Sampld.Domain.Entities.Users;

namespace Sampld.Application.Abstractions.Authentication;

public interface ITokenProvider
{
    string Create(User user);
}