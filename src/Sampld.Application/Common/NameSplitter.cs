namespace Sampld.Application.Common;

public static class NameSplitter
{
    public static (string FirstName, string LastName) SplitFullName(this string fullName)
    {
        var parts = fullName
            .Trim()
            .Split(' ', 2, StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

        var firstName = parts.ElementAtOrDefault(0) ?? "Google";
        var lastName = parts.ElementAtOrDefault(1) ?? "User";

        return (firstName, lastName);
    }
}