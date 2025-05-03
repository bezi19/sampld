import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { authService } from "@/services/authService";
import { User, AuthContextType } from "@/types/auth";
import { decodeToken } from "@/utils/auth";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        setIsLoading(true);
        const token =
          localStorage.getItem("token") || localStorage.getItem("access_token");

        if (token) {
          const userData = decodeToken(token);
          if (userData) {
            setUser(userData);
          }
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("access_token");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await authService.login({
        Email: email,
        Password: password,
      });
      localStorage.setItem("token", response.token);

      if (response.token) {
        const userData = decodeToken(response.token);
        if (userData) {
          setUser(userData);
        } else {
          setUser({
            id: response.id || "1",
            email: email,
            name: response.name || "User",
          });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = async (returnUrl: string) => {
    setIsLoading(true);
    try {
      await authService.loginGoogle(returnUrl);
      return true;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (
    email: string,
    name: string,
    lastName: string,
    username: string,
    password: string
  ) => {
    setIsLoading(true);
    try {
      const registerData = {
        Email: email,
        Name: name,
        LastName: lastName,
        Username: username,
        Password: password,
      };

      await authService.register(registerData);
      return;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("access_token");
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    googleLogin,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
