import { ThemeProvider as StyledProvider } from "styled-components";
import { useEffect } from "react";
import { defaultTheme, Theme } from "./defaultTheme";
import GlobalStyles from "./globalStyles";
import { useDarkMode } from "../utils/useDarkMode";

interface ThemeProviderProps {
  theme?: Theme;
  mode?: "dark" | "light" | "auto";
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = "light",
  theme = defaultTheme
}) => {
  const themeMode = useDarkMode(mode);
  useEffect(() => {
    const el = document.createElement("script");
    el.src =
      "https://polyfill.io/v3/polyfill.min.js?features=Element.prototype.inert";
    el.async = true;
    document.head.appendChild(el);
  }, []);
  return (
    <>
      <GlobalStyles />
      <StyledProvider theme={{ ...theme, mode: themeMode }}>
        {children}
      </StyledProvider>
    </>
  );
};

export default ThemeProvider;
