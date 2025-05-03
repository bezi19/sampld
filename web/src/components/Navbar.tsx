import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useColorScheme } from "@mui/material/styles";
import { useTheme, useMediaQuery } from "@mui/material";
import AuthDialog from "@/components/auth/AuthDialog";
import { StyledAppBar } from "@/styles/AppBar.styles";
import { StyledTypography } from "@/styles/Typography.styles";
import { useAuth } from "@/contexts/AuthContext";
import UserMenu from "@/components/user/UserMenu";
import ThemeToggle from "@/components/theme/ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => setOpen(false);
  const handleOpenLogin = () => {
    setOpen(true);
    handleDrawerClose();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    logout();
    handleDrawerClose();
  };

  useEffect(() => {
    if (!isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  const drawer = (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          height: 64,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <StyledTypography variant="h6">sampld</StyledTypography>
        <IconButton
          onClick={handleDrawerToggle}
          edge="end"
          size="large"
          sx={{
            color:
              theme.palette.mode === "light"
                ? theme.palette.primary.main
                : "inherit",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ p: 2 }}>
        {isAuthenticated && user && (
          <ListItem sx={{ px: 1, mb: 1 }}>
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={user.name} secondary="Logged in" />
          </ListItem>
        )}

        <ListItem sx={{ px: 1, borderRadius: 1, mb: 1 }} onClick={toggleTheme}>
          <ListItemIcon>
            {mode === "dark" ? (
              <LightModeIcon color="primary" />
            ) : (
              <DarkModeIcon color="primary" />
            )}
          </ListItemIcon>
          <ListItemText
            primary={
              mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          />
        </ListItem>

        {isAuthenticated ? (
          <ListItem sx={{ px: 1, borderRadius: 1 }} onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </ListItem>
        ) : (
          <ListItem sx={{ px: 1, borderRadius: 1 }} onClick={handleOpenLogin}>
            <ListItemIcon>
              <LoginIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sign in" />
          </ListItem>
        )}
      </List>
    </>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar sx={{ height: 64, minHeight: 64 }}>
          <StyledTypography variant="h6">sampld</StyledTypography>
          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && (
            <>
              <UserMenu
                user={user}
                isAuthenticated={isAuthenticated}
                onLogin={handleOpenLogin}
                onLogout={logout}
              />
              <ThemeToggle />
            </>
          )}

          {isMobile && (
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                ml: 1,
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "inherit",
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
          BackdropProps: {
            transitionDuration: 0,
          },
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "100%", sm: 320 },
            boxSizing: "border-box",
            backgroundColor: (theme) => theme.palette.background.paper,
            borderLeft: (theme) =>
              theme.palette.mode === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.08)",
            transitionDelay: "0ms !important",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.7)"
                : "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          },
        }}
        anchor="right"
      >
        {drawer}
      </Drawer>

      <AuthDialog open={open} onClose={handleClose} />
    </>
  );
};

export default Navbar;
