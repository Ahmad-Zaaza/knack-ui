import { ThemeProvider as StyledProvider } from "styled-components";
import { defaultTheme, ThemeType } from "./defaultTheme";

interface ThemeProviderProps {
  theme?: ThemeType;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme
}) => <StyledProvider theme={theme}>{children}</StyledProvider>;

export default ThemeProvider;
