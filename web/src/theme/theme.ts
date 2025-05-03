import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: "none",
    },
    caption: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    overline: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#DD3944",
          light: "#D62531",
          dark: "#BA1D27",
        },
        secondary: {
          main: "#203B51",
          light: "#202529",
        },
        background: {
          default: "#FFFFFF",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#202529",
          secondary: "#203B51",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#DD3944",
          light: "#D62531",
          dark: "#BA1D27",
        },
        secondary: {
          main: "#203B51",
          light: "#202529",
        },
        background: {
          default: "#202529",
          paper: "#202529",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#DD3944",
        },
      },
    },
  },
});
