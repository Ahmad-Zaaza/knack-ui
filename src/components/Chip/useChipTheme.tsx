import { darken } from "polished";
import { useMemo } from "react";
import useKnackTheme from "../../utils/useTheme";

const useChipTheme = () => {
  const mainTheme = useKnackTheme();

  const chipSizeStyles = {
    small: {
      "--spacing": "10px",
      "--height": "24px",
      "--font-size": `${14 / 16}rem`
    },
    medium: {
      "--spacing": "14px",
      "--font-size": `${14 / 16}rem`,
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
          theme: mainTheme.colors.gray[200],
          text: mainTheme.colors.gray[500]
        },
        info: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.themes.info.color
        },
        danger: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.themes.danger.color
        },
        success: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.themes.success.color
        },
        warning: {
          text: mainTheme.colors.white,
          theme: mainTheme.colors.themes.warning.color
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
        },
        warning: {
          text: darken(0.2, mainTheme.colors.themes.warning.color),
          theme: mainTheme.colors.themes.warning.color
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
        },
        warning: {
          text: darken(0.2, mainTheme.colors.themes.warning.color),
          theme: mainTheme.colors.themes.warning.color
        }
      }
    }),
    [mainTheme]
  );
  return { chipSizeStyles, chipTheme };
};

export default useChipTheme;
