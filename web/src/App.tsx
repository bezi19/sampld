import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider } from "notistack";
import { theme } from "@/theme/theme";
import { AuthProvider } from "@/contexts/AuthContext";
import AppLayout from "@/components/layout/AppLayout";
import Home from "@/pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <AuthProvider>
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </AppLayout>
          </BrowserRouter>
        </AuthProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
