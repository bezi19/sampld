import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: "none",
  fontWeight: 500,
  color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#203B51",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus": {
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    backgroundColor: "transparent",
    outline: "none",
  },
}));

export const GoogleButton = styled(Button)(({ theme }) => ({
  background: "#fff !important",
  color: "#23272a !important",
  borderRadius: 999,
  fontWeight: 600,
  fontSize: "1rem",
  padding: theme.spacing(1.2, 0),
  marginTop: theme.spacing(2),
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "none !important",
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.2)"
      : "rgba(32,37,41,0.2)"
  } !important`,
  "&:hover": {
    background: "#f5f5f5",
    boxShadow: "none",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.4)"
        : "rgba(32,37,41,0.4)",
  },
}));
