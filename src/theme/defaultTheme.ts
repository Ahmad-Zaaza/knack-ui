import { COLORS, ELEVATIONS, QUERIES } from "../styles/constants";

export interface ThemeType {
  queries: typeof QUERIES;
  elevations: typeof ELEVATIONS;
  colors: typeof COLORS;
}

export const defaultTheme: ThemeType = {
  queries: QUERIES,
  colors: COLORS,
  elevations: ELEVATIONS
};
