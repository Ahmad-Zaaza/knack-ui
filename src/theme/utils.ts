import { removeUndefinedKeys, Subset } from "../utils/helpers";
import {
  builtInBorderRadiuses,
  lightThemeColors,
  darkThemeColors,
  lightModeTheme,
  darkModeTheme
} from "./builtInTokens";
import {
  KnackTheme,
  Theme,
  ThemeBorderRadiuses,
  ThemeColors
} from "./theme.types";

function validateColorValues(
  colors: Subset<ThemeColors>,
  builtInColors: ThemeColors
): ThemeColors {
  try {
    if (!colors) {
      return builtInColors;
    }
    return Object.entries(colors).reduce((acc, [key, value]) => {
      if (!value) {
        // @ts-ignore
        acc[key] = builtInColors[key];
      } else if (typeof value === "string") {
        // @ts-ignore
        acc[key] = value;
      } else {
        // @ts-ignore
        acc[key] = {
          // @ts-ignore
          ...builtInColors[key],
          ...removeUndefinedKeys(value)
        };
      }
      return acc;
    }, builtInColors);
  } catch (error) {
    return builtInColors;
  }
}
function validateBorderRadiuses(
  radiuses?: Subset<ThemeBorderRadiuses>
): ThemeBorderRadiuses {
  try {
    if (!radiuses) {
      return {} as ThemeBorderRadiuses;
    }
    return Object.entries(radiuses).reduce((acc, [key, value]) => {
      if (!value) {
        // @ts-ignore
        acc[key] = builtInBorderRadiuses[key];
      } else {
        // @ts-ignore
        acc[key] = value;
      }
      return acc;
    }, builtInBorderRadiuses);
  } catch (error) {
    return {} as ThemeBorderRadiuses;
  }
}

export const createTheme = (
  mode: "light" | "dark",
  theme: Subset<Theme>
): KnackTheme => {
  const cleanTheme = removeUndefinedKeys(theme) as Theme;
  let builtInTheme: KnackTheme;
  let builtInColors: ThemeColors;
  if (mode === "dark") {
    builtInTheme = darkModeTheme;
    builtInColors = darkThemeColors;
  } else {
    builtInTheme = lightModeTheme;
    builtInColors = lightThemeColors;
  }
  return {
    ...builtInTheme,
    scaleDenominator:
      cleanTheme.scaleDenominator || builtInTheme.scaleDenominator,

    colors: {
      ...builtInColors,
      ...validateColorValues(
        cleanTheme.colors as Subset<ThemeColors>,
        builtInColors
      )
    },
    borderRadiuses: {
      ...builtInBorderRadiuses,
      ...validateBorderRadiuses(
        cleanTheme.borderRadiuses as Subset<ThemeBorderRadiuses>
      )
    }
  };
};
