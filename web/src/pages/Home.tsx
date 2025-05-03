import { useAuth } from "@/contexts/AuthContext";
import WelcomeContent from "@/components/home/WelcomeContent";

const Home = () => {
  const { user } = useAuth();

  return <WelcomeContent user={user} />;
};

export default Home;
