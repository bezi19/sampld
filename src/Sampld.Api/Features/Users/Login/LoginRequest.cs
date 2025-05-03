using FastEndpoints;
using FluentValidation;

namespace Sampld.Api.Features.Users.Login;

public record LoginRequest(string Email, string Password)
{
    public class LoginRequestValidator : Validator<LoginRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(x => x.Email).NotEmpty().EmailAddress().WithMessage("Email is required");
            RuleFor(x => x.Password).NotEmpty().NotNull().WithMessage("Password is required");
        }
    }
}