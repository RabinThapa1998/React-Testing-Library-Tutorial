import { createContext, useMemo, useState } from "react";
import { createTheme, Paper, Typography } from "@mui/material";
import "./App.css";
import { PaletteMode } from "@mui/material";
import { getDesignTokens } from "./components/theme/theme";
import { ThemeProvider } from "@mui/material";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/layout/layout";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export type colorModeProps = {
  toggleColorMode: () => void;
};
export const ColorModeContext = createContext<colorModeProps>({
  toggleColorMode: () => {},
});

function App() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode: colorModeProps = {
    toggleColorMode: () => {
      setMode((prevMode: PaletteMode) =>
        prevMode === "light" ? "dark" : "light"
      );
    },
  };

  const theme = createTheme(getDesignTokens(mode));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Paper elevation={0} square>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Layout>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
