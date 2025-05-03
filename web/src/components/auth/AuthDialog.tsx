import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import { StyledDialog } from "@/styles/Dialog.styles";
import GoogleLoginButton from "@/components/auth/GoogleLoginButton";
import { useAuth } from "@/contexts/AuthContext";
import { LoginForm, RegisterForm } from "@/components/auth/AuthForm";
import { AuthFormData } from "@/types/auth";

interface AuthDialogProps {
  open: boolean;
  onClose: () => void;
}

const AuthDialog = ({ open, onClose }: AuthDialogProps) => {
  const { login, register, googleLogin } = useAuth();
  const [dialogMode, setDialogMode] = useState<"login" | "register">("login");
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    name: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      if (dialogMode === "login") {
        await login(formData.email, formData.password);
        onClose();
      } else {
        await register(
          formData.email,
          formData.name,
          formData.lastName,
          formData.username,
          formData.password
        );
        setSuccessMessage(
          "Registration successful! Please sign in with your new account."
        );
        setDialogMode("login");
        setFormData({
          email: formData.email,
          name: "",
          lastName: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        console.error(`Auth error (${dialogMode}):`, error);

        if (dialogMode === "login") {
          // Login-specific error handling
          if (
            errorMessage.startsWith("404:") ||
            errorMessage.startsWith("401:") ||
            errorMessage.startsWith("400:")
          ) {
            setError("Invalid email or password");
          } else {
            setError("An error occurred during login. Please try again.");
          }
        } else {
          // Registration-specific error handling
          if (errorMessage.startsWith("400:")) {
            setError("A user with this email address already exists");
          } else {
            setError(
              "An error occurred during registration. Please try again."
            );
          }
        }
      } else {
        setError(`An error occurred. Please try again.`);
        console.error(`Unknown auth error (${dialogMode}):`, error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const returnUrl = "/";
    try {
      setIsLoading(true);
      setError(null);

      await googleLogin(returnUrl);
    } catch (error) {
      console.error("Google login error:", error);
      setError("An error occurred with Google login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDialogModeChange = (mode: "login" | "register") => {
    setDialogMode(mode);
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      fullWidth
      className={dialogMode === "register" ? "wide-dialog" : ""}
    >
      <DialogTitle>
        {dialogMode === "login" ? "Sign in" : "Sign up"}
      </DialogTitle>
      <DialogContent>
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <Divider>or</Divider>

        {dialogMode === "login" ? (
          <LoginForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            successMessage={successMessage}
            onSwitchMode={handleDialogModeChange}
          />
        ) : (
          <RegisterForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
            successMessage={successMessage}
            onSwitchMode={handleDialogModeChange}
          />
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default AuthDialog;
