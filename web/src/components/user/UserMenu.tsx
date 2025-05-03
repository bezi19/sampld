import { Avatar, Box, Typography } from "@mui/material";
import { StyledButton } from "@/styles/Button.styles";
import { User } from "@/types/auth";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

interface UserMenuProps {
  user: User | null;
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const UserMenu = ({
  user,
  isAuthenticated,
  onLogin,
  onLogout,
}: UserMenuProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      {isAuthenticated && user && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mr: 1,
            padding: "4px 12px",
            borderRadius: 20,
            transition: "background-color 0.2s",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
              mr: 1,
              fontSize: "0.9rem",
            }}
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              fontWeight: 500,
            }}
          >
            {user.name}
          </Typography>
        </Box>
      )}

      {isAuthenticated ? (
        <StyledButton
          variant="text"
          onClick={onLogout}
          sx={{
            minWidth: 0,
            borderRadius: 2,
            padding: "6px 12px",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
          startIcon={<LogoutIcon fontSize="small" />}
        >
          Sign out
        </StyledButton>
      ) : (
        <StyledButton
          variant="text"
          onClick={onLogin}
          sx={{
            minWidth: 0,
            borderRadius: 2,
            padding: "6px 12px",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
          startIcon={<LoginIcon fontSize="small" />}
        >
          Sign in
        </StyledButton>
      )}
    </Box>
  );
};

export default UserMenu;
