export interface KnackTheme {
  mediaQueries: KnackThemeMediaQueries;
  elevations: ThemeElevation;
  colors: ThemeColors;
  borderRadiuses: ThemeBorderRadiuses;
  scaleDenominator: number;
}

export interface IntegratedTheme {
  knackTheme: KnackTheme;
}

export type BuiltInColorPalettesKeys = "gray" | "blue" | "red" | "green";

export type PaletteDegrees = keyof ColorPalleteMap;

export type ColorPalette = {
  [key in BuiltInColorPalettesKeys]: ColorPalleteMap;
};

export type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  onPrimary: string;
  onSecondary: string;
  paper: string;
  white: string;
  themes: {
    [key in SemanticThemes]: {
      color: string;
      hue: string;
      lightness: string;
      saturation: string;
    };
  };
} & ColorPalette;

export type ColorPalleteMap = {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
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
  readonly tabletAndUp: string;
  readonly laptopAndUp: string;
  readonly desktopAndUp: string;
};

export type AdvancedMediaQueries = {
  precisePointerDevices: string;
  hoverSupported: string;
  hoverPointerDevices: () => string;
};

export type ThemeElevation = {
  [key: number]: Record<string, string>;
};
