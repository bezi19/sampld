import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <main style={{ padding: "2rem" }}>{children}</main>
    </div>
  );
};

export default AppLayout;
