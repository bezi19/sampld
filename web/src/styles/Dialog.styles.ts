import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(32, 37, 41, 0.97)"
        : "rgba(255, 255, 255, 0.97)",
    backdropFilter: "blur(8px)",
    borderRadius: 18,
    padding: theme.spacing(3, 3, 2, 3),
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 32px)",
      margin: 16,
      maxWidth: "calc(100% - 32px)",
      minWidth: "unset",
    },
    [theme.breakpoints.up("sm")]: {
      minWidth: "480px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "520px",
    },
  },
  "&.wide-dialog .MuiDialog-paper": {
    [theme.breakpoints.up("sm")]: {
      minWidth: "600px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "650px",
    },
  },
  "& .MuiDialogTitle-root": {
    color:
      theme.palette.mode === "dark" ? theme.palette.text.primary : "#203B51",
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    padding: 0,
  },
  "& .MuiDialogContent-root": {
    padding: 0,
    marginBottom: theme.spacing(2),
  },
  "& .MuiTextField-root": {
    marginTop: theme.spacing(2),
    "& .MuiInputBase-root": {
      color: theme.palette.mode === "dark" ? "#fff" : "#203B51",
      background: theme.palette.mode === "dark" ? "#23272a" : "#f3f6f9",
      borderRadius: 10,
      fontSize: "1.1rem",
      minHeight: 48,
      padding: "0 4px",
      boxSizing: "border-box",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(32,37,41,0.1)",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(32,37,41,0.1)",
      },
    },
    "& .MuiInputLabel-root": {
      color:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.7)"
          : "rgba(32,37,41,0.6)",
      fontWeight: 500,
    },
    "& .MuiInputLabel-asterisk": {
      color: "#e53935",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.1)"
          : "rgba(32,37,41,0.1)",
      borderWidth: 1,
    },
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.1)"
          : "rgba(32,37,41,0.1)",
    },
  },
  "& .MuiButton-contained": {
    background: "#e53935",
    color: "#fff",
    borderRadius: 999,
    fontWeight: 700,
    fontSize: "1.08rem",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1.3, 0),
    textTransform: "none",
    boxShadow: "0 2px 8px 0 rgba(229,57,53,0.10)",
    "&:hover": {
      background: "#b71c1c",
    },
    "&:disabled": {
      background: theme.palette.mode === "dark" ? "#444" : "#ccc",
      color: theme.palette.mode === "dark" ? "#888" : "#fff",
    },
  },
  "& .MuiButton-outlined": {
    color: theme.palette.mode === "dark" ? "#fff" : "#203B51",
    borderColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.2)"
        : "rgba(32,37,41,0.2)",
    background: "transparent",
    borderRadius: 999,
    fontWeight: 600,
    fontSize: "1rem",
    marginTop: theme.spacing(2),
    textTransform: "none",
    "&:hover": {
      borderColor:
        theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "#203B51",
      background:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.05)"
          : "rgba(32,37,41,0.05)",
    },
  },
  "& .MuiDivider-root": {
    margin: theme.spacing(3, 0, 2, 0),
    "&::before, &::after": {
      borderColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.1)"
          : "rgba(32,37,41,0.1)",
    },
    "& .MuiDivider-wrapper": {
      color:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,0.7)"
          : "rgba(32,37,41,0.6)",
      fontWeight: 500,
    },
  },
}));
