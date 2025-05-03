namespace Sampld.Domain.Entities.Users;

public class User(
    Guid id,
    string email,
    string name,
    string lastName,
    string username,
    string? passwordHash)
{
    public Guid Id { get; set; } = id;
    public string Email { get; set; } = email;
    public string Name { get; set; } = name;
    public string LastName { get; set; } = lastName;
    public string Username { get; set; } = username;
    public string? PasswordHash { get; set; } = passwordHash;
    public List<string> Roles { get; set; } = [];
}