import { COLORS, ELEVATIONS, QUERIES, RADIUSES } from "../styles/constants";

export interface ThemeType {
  queries: typeof QUERIES;
  elevations: typeof ELEVATIONS;
  colors: typeof COLORS;
  borderRadiuses: typeof RADIUSES;
}

export const defaultTheme: ThemeType = {
  queries: QUERIES,
  colors: COLORS,
  elevations: ELEVATIONS,
  borderRadiuses: RADIUSES
};
