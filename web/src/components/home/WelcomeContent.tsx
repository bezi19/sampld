import { Box } from "@mui/material";
import { WelcomeText, DescriptionText } from "@/styles/Typography.styles";
import { User } from "@/types/auth";

interface WelcomeContentProps {
  user: User | null;
}

const WelcomeContent = ({ user }: WelcomeContentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        textAlign: "center",
      }}
    >
      <WelcomeText>
        Welcome to <span>sampld </span>
        {user && user.name}
      </WelcomeText>
      <DescriptionText>
        Your all-in-one platform for managing and organizing your digital life.
        Simple, secure, and designed with you in mind.
      </DescriptionText>
    </Box>
  );
};

export default WelcomeContent;
