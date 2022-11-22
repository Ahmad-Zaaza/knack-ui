import { COLORS, ELEVATIONS, QUERIES, RADIUSES } from "../styles/constants";
import { removeUndefinedKeys, Subset } from "../utils/helpers";
import {
  CreatedTheme,
  Theme,
  ThemeColors,
  ThemeMediaQueries
} from "./theme.types";

export const defaultTheme: Theme = {
  queries: QUERIES,
  colors: COLORS,
  elevations: ELEVATIONS,
  borderRadiuses: RADIUSES,
  scaleDenominator: 4,
  mode: "light"
};

function validateColorValues(colors: Subset<ThemeColors>): ThemeColors {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (!value) {
      // @ts-ignore
      acc[key] = defaultTheme.colors[key];
    } else if (typeof value === "string") {
      // @ts-ignore
      acc[key] = value;
    } else {
      // @ts-ignore
      acc[key] = {
        // @ts-ignore
        ...defaultTheme.colors[key],
        ...removeUndefinedKeys(value)
      };
    }
    return acc;
  }, defaultTheme.colors);
}

export const createTheme = (theme: Subset<CreatedTheme>): Theme => ({
  ...defaultTheme,
  ...theme,
  colors: {
    ...validateColorValues(theme.colors as Subset<ThemeColors>)
  },
  queries: { ...defaultTheme.queries, ...theme.queries } as ThemeMediaQueries
});
