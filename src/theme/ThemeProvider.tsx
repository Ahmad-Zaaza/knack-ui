import { ThemeProvider as StyledProvider } from "styled-components";
import { useEffect } from "react";
import { defaultTheme, ThemeType } from "./defaultTheme";
import GlobalStyles from "./globalStyles";

interface ThemeProviderProps {
  theme?: ThemeType;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme
}) => {
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
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </>
  );
};

export default ThemeProvider;
