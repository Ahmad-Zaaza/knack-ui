import { useTheme as useStyledTheme } from "styled-components";

const useKnackTheme = () => {
  const mainTheme = useStyledTheme();
  if (!mainTheme) {
    throw new Error(
      'Please wrap your component with <ThemeProvider /> that is imported from "knack-ui"'
    );
  }
  return mainTheme;
};

export default useKnackTheme;
