import React from "react";
import { GoogleButton } from "@/styles/Button.styles";
import GoogleLogo from "@/assets/icons/google";

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <GoogleButton
      variant="contained"
      startIcon={<GoogleLogo />}
      onClick={onClick}
      fullWidth
    >
      Continue with Google
    </GoogleButton>
  );
};

export default GoogleLoginButton;
