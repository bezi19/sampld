import api from "./api";
import Cookies from "js-cookie";
import { LoginData, RegisterData } from "@/types/auth";

export const authService = {
  login: async (data: LoginData) => {
    const response = await api.post("/login", data);
    return response.data;
  },

  loginGoogle: async (returnUrl: string) => {
    try {
      const encodedReturnUrl = encodeURIComponent(returnUrl);

      const response = await api.get(
        `/google/login?ReturnUrl=${encodedReturnUrl}`,
        {
          headers: {
            Accept: "*/*",
          },
          withCredentials: true,
          maxRedirects: 0,
        }
      );

      const redirectUrl = response.headers.location;
      if (redirectUrl) {
        const token = Cookies.get("access_token");

        if (token) localStorage.setItem("access_token", token);
        window.open(redirectUrl, "_self");
      } else {
        console.error("No Location header found");
        throw new Error("No redirect URL provided by the server");
      }

      return response;
    } catch (error) {
      console.error("Google login error in service:", error);
      throw error;
    }
  },

  register: async (data: RegisterData) => {
    const response = await api.post("/register", data);
    return response.data;
  },
};
