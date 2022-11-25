// import { useTheme as useStyledTheme } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const useKnackTheme = () => {
  const mainTheme = useContext(ThemeContext);
  if (!mainTheme) {
    throw new Error(
      'Please wrap your component with <ThemeProvider /> that is imported from "knack-ui"'
    );
  }
  return mainTheme;
};

export default useKnackTheme;
