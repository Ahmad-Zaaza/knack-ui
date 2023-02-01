import { darken } from "polished";
import { useMemo } from "react";
import useKnackTheme from "../../utils/useTheme";

const useChipTheme = () => {
  const mainTheme = useKnackTheme();

  const chipSizeStyles = {
    small: {
      "--spacing": "8px",
      "--height": "24px",
      "--font-size": `${14 / 16}rem`
    },
    medium: {
      "--spacing": "12px",
      "--font-size": `${16 / 16}rem`,
      "--height": "32px"
    }
  };
  const chipTheme = useMemo(
    () => ({
      primary: {
        primary: {
          theme: mainTheme.colors.primary,
          text: mainTheme.colors.onPrimary
        },
        neutral: {
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
        primary: {
          theme: mainTheme.colors.primary,
          text: darken(0.2, mainTheme.colors.primary)
        },
        neutral: {
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
        primary: {
          theme: mainTheme.colors.primary,
          text: darken(0.2, mainTheme.colors.primary)
        },
        neutral: {
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
  return { chipSizeStyles, chipTheme };
};

export default useChipTheme;
