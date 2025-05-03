using FastEndpoints;
using FluentValidation;

namespace Sampld.Api.Features.Users.Register;

public record RegisterRequest(string Email, string Name, string LastName, string Username, string Password)
{
    public class LoginRequestValidator : Validator<RegisterRequest>
    {
        public LoginRequestValidator()
        {
            RuleFor(x => x.Email).NotEmpty().EmailAddress().WithMessage("Email is required");
            RuleFor(x => x.Password)
                .NotEmpty()
                .MinimumLength(8)
                .WithMessage("Password is required and must be at least 8 characters long");
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required");
            RuleFor(x => x.LastName).NotEmpty().WithMessage("Last name is required");
            RuleFor(x => x.Username).NotEmpty().WithMessage("Username is required");
        }
    }
}