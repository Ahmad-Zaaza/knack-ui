import { useMemo } from "react";
import { useTheme } from "styled-components";

const useButtonTheme = () => {
  const mainTheme = useTheme();
  if (!mainTheme) {
    throw new Error(
      '<Button/> must be inside <ThemeProvider/> with a value, import {ThemeProvider} from "knack-ui" '
    );
  }
  const buttonSizeStyles = {
    medium: {
      "--spacing": "8px",
      "--height": "28px",
      "--font-size": `${14 / 16}rem`
    },
    large: {
      "--spacing": "12px",
      "--font-size": `${16 / 16}rem`,
      "--height": "38px"
    }
  };
  const buttonTheme = useMemo(
    () => ({
      primary: {
        default: {
          theme: mainTheme.colors.primary,
          text: mainTheme.colors.onPrimary
        },
        info: {
          theme: mainTheme.colors.blue[400],
          text: mainTheme.colors.white
        },
        danger: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.red[400]
        },
        success: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.green[400]
        }
      },
      secondary: {
        default: {
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[500]
        },
        info: {
          theme: mainTheme.colors.blue[200],
          text: mainTheme.colors.blue[400]
        },
        danger: {
          theme: mainTheme.colors.red[200],
          text: mainTheme.colors.red[400]
        },
        success: {
          theme: mainTheme.colors.green[200],
          text: mainTheme.colors.green[400]
        }
      },
      tertiary: {
        default: {
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[500]
        },
        info: {
          theme: mainTheme.colors.blue[200],
          text: mainTheme.colors.blue[400]
        },
        danger: {
          theme: mainTheme.colors.red[200],
          text: mainTheme.colors.red[400]
        },
        success: {
          theme: mainTheme.colors.green[200],
          text: mainTheme.colors.green[400]
        }
      }
    }),
    [mainTheme]
  );
  return { buttonSizeStyles, buttonTheme };
};

export default useButtonTheme;
