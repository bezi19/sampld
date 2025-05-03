import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import FormHelperText from "@mui/material/FormHelperText";
import { LoginFormProps, RegisterFormProps } from "@/types/auth";
import {
  textFieldStyles,
  linkButtonStyles,
  formTypographyStyles,
} from "@/styles/common";

export const LoginForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  isLoading,
  error,
  successMessage,
  onSwitchMode,
}: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}

      <TextField
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        required
        fullWidth
        autoComplete="username"
        sx={textFieldStyles}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleFormChange}
        required
        fullWidth
        autoComplete="current-password"
        sx={textFieldStyles}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
        <Button href="#" variant="text" sx={linkButtonStyles}>
          Forgot password?
        </Button>
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={!formData.email || !formData.password || isLoading}
      >
        {isLoading ? "Loading..." : "Sign in"}
      </Button>

      <Typography align="center" sx={formTypographyStyles}>
        New to our service?{" "}
        <Button
          variant="text"
          sx={linkButtonStyles}
          onClick={() => onSwitchMode("register")}
        >
          Sign up
        </Button>
      </Typography>
    </form>
  );
};

export const RegisterForm = ({
  formData,
  handleFormChange,
  handleSubmit,
  isLoading,
  error,
  successMessage,
  onSwitchMode,
}: RegisterFormProps) => {
  const passwordTooShort =
    formData.password.length > 0 && formData.password.length < 8;
  const passwordsDoNotMatch =
    formData.confirmPassword.length > 0 &&
    formData.password !== formData.confirmPassword;

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}

      <TextField
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        required
        fullWidth
        autoComplete="email"
        sx={textFieldStyles}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 2,
        }}
      >
        <TextField
          label="First Name"
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleFormChange}
          required
          fullWidth
          autoComplete="given-name"
          sx={{
            ...textFieldStyles,
            marginBottom: { xs: 0, sm: 0 },
            flex: 1,
          }}
        />
        <TextField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName || ""}
          onChange={handleFormChange}
          required
          fullWidth
          autoComplete="family-name"
          sx={{
            ...textFieldStyles,
            marginBottom: { xs: 0, sm: 0 },
            flex: 1,
          }}
        />
      </Box>

      <TextField
        label="Username"
        type="text"
        name="username"
        value={formData.username || ""}
        onChange={handleFormChange}
        required
        fullWidth
        autoComplete="username"
        sx={textFieldStyles}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormChange}
            required
            fullWidth
            autoComplete="new-password"
            error={passwordTooShort}
            sx={{
              ...textFieldStyles,
              marginBottom: 0,
            }}
          />
          {passwordTooShort && (
            <FormHelperText error>
              Password must be at least 8 characters long
            </FormHelperText>
          )}
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextField
            label="Repeat password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFormChange}
            required
            fullWidth
            autoComplete="new-password"
            error={passwordsDoNotMatch}
            sx={{
              ...textFieldStyles,
              marginBottom: 0,
            }}
          />
          {passwordsDoNotMatch && (
            <FormHelperText error>Passwords do not match</FormHelperText>
          )}
        </Box>
      </Box>

      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={
          !formData.email ||
          !formData.name ||
          !formData.lastName ||
          !formData.username ||
          !formData.password ||
          !formData.confirmPassword ||
          formData.password !== formData.confirmPassword ||
          formData.password.length < 8 ||
          isLoading
        }
        sx={{ mt: 2 }}
      >
        {isLoading ? "Loading..." : "Sign up"}
      </Button>

      <Typography align="center" sx={formTypographyStyles}>
        Already have an account?{" "}
        <Button
          variant="text"
          sx={linkButtonStyles}
          onClick={() => onSwitchMode("login")}
        >
          Sign in
        </Button>
      </Typography>
    </form>
  );
};
