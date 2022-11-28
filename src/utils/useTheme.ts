import { useTheme } from "styled-components";

const useKnackTheme = () => {
  const mainTheme = useTheme();
  if (!mainTheme) {
    throw new Error(
      'Please wrap your component with <ThemeProvider /> that is imported from "knack-ui"'
    );
  }
  return mainTheme.knackTheme;
};

export default useKnackTheme;
