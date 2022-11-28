import { ThemeProvider as StyledProvider } from "styled-components";
import { useMemo } from "react";
import GlobalStyles from "./globalStyles";
import { KnackTheme } from "./theme.types";
import { lightModeTheme, darkModeTheme } from "./builtInTokens";
import { useDarkMode } from "../utils/useDarkMode";

interface WithTheme {
  theme: KnackTheme;
  mode?: never;
}
interface WithoutTheme {
  theme?: never;
  mode: "light" | "dark" | "auto";
}

export type ThemeProviderProps = WithTheme | WithoutTheme;

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode,
  theme
}) => {
  const themeMode = useDarkMode(mode);

  const knackTheme: KnackTheme = useMemo(() => {
    if (mode) {
      if (themeMode === "dark") {
        return darkModeTheme;
      }
      return lightModeTheme;
    }
    return theme;
  }, [theme, themeMode, mode]);

  return (
    <>
      <GlobalStyles />
      <StyledProvider theme={knackTheme}>{children}</StyledProvider>
    </>
  );
};

export default ThemeProvider;
