import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#203B51",
  fontWeight: 600,
}));

export const WelcomeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#203B51",
  fontWeight: 600,
  fontSize: "2.5rem",
  marginBottom: theme.spacing(2),
  "& span": {
    color: "#e53935",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.7)"
      : "rgba(32,37,41,0.7)",
  fontSize: "1.1rem",
  maxWidth: "600px",
  lineHeight: 1.6,
}));
