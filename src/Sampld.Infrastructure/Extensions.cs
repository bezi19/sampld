using FastEndpoints.Security;
using FastEndpoints.Swagger;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Sampld.Application.Abstractions.Authentication;
using Sampld.Application.Abstractions.Repositories;
using Sampld.Infrastructure.Common.Authentication;
using Sampld.Infrastructure.Common.Persistence;
using Sampld.Infrastructure.Persistence.Users;

namespace Sampld.Infrastructure;

public static class Extensions
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        services.AddControllers();
        services.AddHttpContextAccessor();

        services.AddPostgres(configuration);
        services.AddAuthenticationInternal(configuration).AddAuthenticationExternal(configuration);
        services.AddAuthorization();

        services.AddEndpointsApiExplorer();
        services.SwaggerDocument(options =>
        {
            options.DocumentSettings = s =>
            {
                s.DocumentName = "SampldAPI";
                s.Version = "v1";
            };
            options.AutoTagPathSegmentIndex = 0;
        });

        return services;
    }

    private static void AddPostgres(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IUserRepository, UserRepository>();

        services.AddDbContext<UsersDbContext>(options =>
            options.UseNpgsql(configuration["Postgres:ConnectionString"])
        );

        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }

    private static IServiceCollection AddAuthenticationInternal(
        this IServiceCollection services,
        IConfiguration configuration
    )
    {
        services.AddTransient<ITokenProvider, TokenProvider>();
        services.AddSingleton<IPasswordHasher, PasswordHasher>();

        services.AddAuthenticationJwtBearer(s => s.SigningKey = configuration["Jwt:Secret"]);

        return services;
    }

    private static void AddAuthenticationExternal(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
            })
            .AddCookie(options => options.Cookie.SameSite = SameSiteMode.Unspecified)
            .AddGoogle(options =>
            {
                options.ClientId = configuration["Google:ClientId"]!;
                options.ClientSecret = configuration["Google:ClientSecret"]!;
                options.CallbackPath = "/signin-google";
            });
    }
}