using Microsoft.AspNetCore.Mvc;

namespace Sampld.Api.Features.Users.Google.Login;

public record GoogleLoginRequest([FromQuery] string ReturnUrl);