import { useColorScheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { StyledIconButton } from "@/styles/IconButton.styles";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (isMobile) {
    return (
      <StyledIconButton onClick={toggleTheme} aria-label="toggle theme">
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </StyledIconButton>
    );
  }

  return (
    <Box
      onClick={toggleTheme}
      sx={{
        display: "flex",
        alignItems: "center",
        ml: 2,
        cursor: "pointer",
        userSelect: "none",
        color: "text.primary",
        "&:hover": {
          "& .MuiTypography-root": {
            color: "primary.main",
          },
          "& .MuiSvgIcon-root": {
            color: "primary.main",
          },
        },
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon fontSize="small" sx={{ mr: 0.5 }} />
      ) : (
        <DarkModeIcon fontSize="small" sx={{ mr: 0.5 }} />
      )}
    </Box>
  );
};

export default ThemeToggle;
