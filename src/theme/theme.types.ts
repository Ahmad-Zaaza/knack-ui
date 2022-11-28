export interface Theme {
  colors: ThemeColors;
  borderRadiuses: ThemeBorderRadiuses;
  scaleDenominator: number;
}
export interface KnackTheme {
  mediaQueries: KnackThemeMediaQueries;
  elevations: ThemeElevation;
  colors: ThemeColors;
  borderRadiuses: ThemeBorderRadiuses;
  scaleDenominator: number;
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

export type KnackThemeMediaQueries = MediaQueries & AdvancedMediaQueries;

export type MediaQueries = {
  tabletAndUp: string;
  laptopAndUp: string;
  desktopAndUp: string;
};

export type AdvancedMediaQueries = {
  precisePointerDevices: string;
  hoverSupported: string;
  hoverPointerDevices: () => string;
};

export type ThemeElevation = {
  [key: number]: Record<string, string>;
};
