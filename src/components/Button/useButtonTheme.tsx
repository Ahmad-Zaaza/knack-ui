import { darken } from "polished";
import { useMemo } from "react";
import useKnackTheme from "../../utils/useTheme";

const useButtonTheme = () => {
  const mainTheme = useKnackTheme();

  const buttonSizeStyles = {
    small: {
      "--spacing": "12px",
      "--height": "32px",
      "--font-size": `${14 / 16}rem`
    },
    medium: {
      "--spacing": "14px",
      "--height": "36px",
      "--font-size": `${14 / 16}rem`
    },
    large: {
      "--spacing": "16px",
      "--font-size": `${14 / 16}rem`,
      "--height": "40px"
    }
  };
  const buttonTheme = useMemo(
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
          theme: mainTheme.colors.themes.info.color,
          text: mainTheme.colors.white
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color,
          text: mainTheme.colors.white
        },
        success: {
          theme: mainTheme.colors.themes.success.color,
          text: mainTheme.colors.white
        }
      },
      secondary: {
        primary: {
          theme: mainTheme.colors.primary,
          text: darken(0.2, mainTheme.colors.primary)
        },
        neutral: {
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[800]
        },
        info: {
          theme: mainTheme.colors.themes.info.color,
          text: darken(0.2, mainTheme.colors.themes.info.color)
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color,
          text: darken(0.2, mainTheme.colors.themes.danger.color)
        },
        success: {
          theme: mainTheme.colors.themes.success.color,
          text: darken(0.2, mainTheme.colors.themes.success.color)
        }
      },
      tertiary: {
        primary: {
          theme: mainTheme.colors.primary,
          text: darken(0.2, mainTheme.colors.primary)
        },
        neutral: {
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[800]
        },
        info: {
          theme: mainTheme.colors.themes.info.color,
          text: darken(0.2, mainTheme.colors.themes.info.color)
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color,
          text: darken(0.2, mainTheme.colors.themes.danger.color)
        },
        success: {
          theme: mainTheme.colors.themes.success.color,
          text: darken(0.2, mainTheme.colors.themes.success.color)
        }
      },
      ghost: {
        primary: {
          theme: mainTheme.colors.primary,
          text: darken(0.2, mainTheme.colors.primary)
        },
        neutral: {
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[800]
        },
        info: {
          theme: mainTheme.colors.themes.info.color,
          text: darken(0.2, mainTheme.colors.themes.info.color)
        },
        danger: {
          theme: mainTheme.colors.themes.danger.color,
          text: darken(0.2, mainTheme.colors.themes.danger.color)
        },
        success: {
          theme: mainTheme.colors.themes.success.color,
          text: darken(0.2, mainTheme.colors.themes.success.color)
        }
      }
    }),
    [mainTheme]
  );
  return { buttonSizeStyles, buttonTheme };
};

export default useButtonTheme;
