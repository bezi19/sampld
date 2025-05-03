using Microsoft.Extensions.DependencyInjection;
using Sampld.Application.Services;

namespace Sampld.Application;

public static class Extensions
{
    public static IServiceCollection AddApplication(
        this IServiceCollection services
    )
    {
        services.AddScoped<IUserService, UserService>();

        return services;
    }
}