import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(26, 32, 39, 0.8)"
      : "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  backgroundImage: "none",
  borderBottom: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(0, 0, 0, 0.08)"
  }`,
  boxShadow: "none",
  position: "sticky",
  top: 0,
  zIndex: theme.zIndex.appBar,
  transition: "background-color 0.3s, border-bottom 0.3s",
  height: 64,
  "& .MuiToolbar-root": {
    minHeight: 64,
    height: 64,
    padding: "0 16px",
  },
}));
