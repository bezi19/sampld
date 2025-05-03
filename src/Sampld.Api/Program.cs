using FastEndpoints;
using FastEndpoints.Swagger;
using Sampld.Application;
using Sampld.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile(
    "appsettings.personal.json",
    optional: false,
    reloadOnChange: false
);

builder.Services.AddOpenApi();
builder.Services.AddFastEndpoints();

builder.Services.AddApplication().AddInfrastructure(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowSpecificOrigin",
        corsPolicyBuilder =>
            corsPolicyBuilder
                .WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .WithExposedHeaders("location")
                .AllowCredentials()
    );
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerGen();
}

app.UseAuthorization().UseAuthentication().UseCors("AllowSpecificOrigin");

app.UseFastEndpoints(x => x.Errors.UseProblemDetails());

app.Run();