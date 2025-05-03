import { jwtDecode } from "jwt-decode";
import { User } from "@/types/auth";

export const decodeToken = (token: string): User | null => {
  try {
    const decoded = jwtDecode<any>(token);

    return {
      id: decoded.id || decoded.sub || decoded.nameid || "",
      email: decoded.email || "",
      name: decoded.unique_name || decoded.name || decoded.email || "",
    };
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
