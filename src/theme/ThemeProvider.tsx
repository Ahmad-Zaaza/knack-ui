import { ThemeProvider as StyledProvider } from "styled-components";
import { useEffect, useMemo } from "react";
import GlobalStyles from "./globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import { KnackTheme } from "./theme.types";
import { builtInTheme } from "./builtInTokens";

interface ThemeProviderProps {
  theme?: KnackTheme;
  mode?: "dark" | "light" | "auto";
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = "light",
  theme = builtInTheme
}) => {
  const themeMode = useDarkMode(mode);
  useEffect(() => {
    const el = document.createElement("script");
    el.src =
      "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.inert";
    el.async = true;
    document.head.appendChild(el);
  }, []);

  const knackTheme: KnackTheme = useMemo(
    () => ({
      ...theme,
      mode: themeMode
    }),
    [theme, themeMode]
  );
  return (
    <>
      <GlobalStyles />
      <StyledProvider theme={knackTheme}>{children}</StyledProvider>
    </>
  );
};

export default ThemeProvider;
