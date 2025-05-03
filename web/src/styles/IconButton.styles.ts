import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.text.primary : "#203B51",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
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
