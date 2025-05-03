using Microsoft.EntityFrameworkCore;
using Sampld.Domain.Entities.Users;

namespace Sampld.Infrastructure.Common.Persistence;

public class UsersDbContext(DbContextOptions<UsersDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // modelBuilder.ApplyConfiguration(new UserConfiguration());
        // modelBuilder.ApplyConfiguration(new RoleConfiguration());
        modelBuilder.HasDefaultSchema("users");
    }
}