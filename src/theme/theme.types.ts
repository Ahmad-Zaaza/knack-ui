import { ELEVATIONS } from "../styles/constants";

export interface Theme {
  queries: ThemeMediaQueries;
  elevations: typeof ELEVATIONS;
  colors: ThemeColors;
  borderRadiuses: ThemeBorderRadiuses;
  scaleDenominator: number;
  mode: "dark" | "light";
}

export type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  onPrimary: string;
  onSecondary: string;
  paper: string;
  white: string;
  gray: ColorPalletes;
  blue: ColorPalletes;
  red: ColorPalletes;
  green: ColorPalletes;
  themes: {
    [key in SemanticThemes]: {
      color: string;
      hue: string;
      lightness: string;
      saturation: string;
    };
  };
};

export type ColorPalletes = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
};

export type ThemeBorderRadiuses = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  full: string;
};

export type SemanticThemes = "info" | "success" | "danger" | "warning";

export type ThemeMediaQueries = {
  tabletAndUp: string;
  laptopAndUp: string;
  desktopAndUp: string;
  precisePointerDevices: string;
  hoverSupported: string;
  hoverPointerDevices: () => string;
};

export type ThemeElevation = {
  [K in "light" | "dark"]: {
    [key: number]: Record<string, string>;
  };
};
export type CreatedTheme = Pick<
  Theme,
  "colors" | "queries" | "scaleDenominator"
>;
