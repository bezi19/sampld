import { ChangeEvent, FormEvent } from "react";

export interface AuthFormData {
  email: string;
  name: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface BaseFormProps {
  formData: AuthFormData;
  handleFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  successMessage: string | null;
}

export interface LoginFormProps extends BaseFormProps {
  onSwitchMode: (mode: "login" | "register") => void;
}

export interface RegisterFormProps extends BaseFormProps {
  onSwitchMode: (mode: "login" | "register") => void;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: (returnUrl: string) => Promise<any>;
  register: (
    email: string,
    name: string,
    lastName: string,
    username: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

export interface LoginData {
  Email: string;
  Password: string;
}

export interface RegisterData {
  Email: string;
  Name: string;
  LastName: string;
  Username: string;
  Password: string;
}
