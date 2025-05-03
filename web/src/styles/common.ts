import { SxProps, Theme } from "@mui/material/styles";

export const textFieldStyles: SxProps<Theme> = {
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "none",
    WebkitTextFillColor: (theme) => theme.palette.text.primary,
    transition: "background-color 5000s ease-in-out 0s",
  },
  marginBottom: 2,
};

export const linkButtonStyles: SxProps<Theme> = {
  color: "#4f8cff",
  fontWeight: 500,
  fontSize: "0.95rem",
  textTransform: "none",
  p: 0,
  minWidth: 0,
};

export const formTypographyStyles: SxProps<Theme> = {
  color: (theme) => theme.palette.text.primary,
  fontSize: "0.95rem",
  mt: 2,
};
