export type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  onPrimary: string;
  onSecondary: string;
  alert: string;
  success: string;
  danger: string;
  paper: string;
  white: string;
  gray: ColorPalletes;
  blue: ColorPalletes;
  red: ColorPalletes;
  green: ColorPalletes;
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
  small: string;
  medium: string;
  large: string;
  full: string;
};

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
