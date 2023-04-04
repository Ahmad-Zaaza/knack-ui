import { CSSProperties } from "styled-components";

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
export type CustomizableCSSKeys = readonly [
  "display",
  "top",
  "bottom",
  "inset-inline-start",
  "inset-inline-end",
  "position",
  "margin",
  "margin-inline",
  "margin-block",
  "margin-right",
  "margin-left",
  "margin-top",
  "margin-bottom",
  "padding",
  "padding-inline",
  "padding-block",
  "padding-right",
  "padding-left",
  "padding-top",
  "padding-bottom",
  "width",
  "max-width",
  "min-width",
  "height",
  "max-height",
  "min-height",
  "z-index",
  "flex",
  "align-items",
  "justify-content",
  "flex-direction",
  "flex-wrap",
  "gap"
];

export interface ExtendableCSSProps {
  display?: CSSProperties["display"];

  /** CSS `flex` property */
  flex?: CSSProperties["flex"];

  /** CSS `margin` property */
  m?: number | string;

  /** CSS `margin-top` property */
  mt?: number | string;

  /** CSS `margin-right` property */
  mr?: number | string;

  /** CSS `margin-bottom` property */
  mb?: number | string;

  /** CSS `margin-left` property */
  ml?: number | string;

  /** CSS `margin-left` and `margin-right` property */
  mx?: number | string;

  /** CSS `margin-top` and `margin-bottom` property */
  my?: number | string;

  /** CSS `padding` property */
  p?: number | string;

  /** CSS `padding-top` property */
  pt?: number | string;

  /** CSS `padding-right` property */
  pr?: number | string;

  /** CSS `padding-bottom` property */
  pb?: number | string;

  /** CSS `padding-left` property */
  pl?: number | string;

  /** CSS `padding-left` and `padding-right` property */
  px?: number | string;

  /** CSS `padding-top` and `padding-bottom` property */
  py?: number | string;

  /**
   * CSS `width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  w?: number | string;

  /**
   * CSS `min-width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  wMin?: number | string;

  /**
   * CSS `max-width` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  wMax?: number | string;

  /**
   * CSS `height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  h?: number | string;

  /**
   * CSS `min-height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  hMin?: number | string;

  /**
   * CSS `max-height` property.
   * If its value is less than 1, is considered as a fraction of 100%.
   * If its value is more than 1, is considered as value in px, if it is a string, is passed as is.
   */
  hMax?: number | string;
  /** CSS `position` property */
  position?: CSSProperties["position"];
  /** CSS `top` property */
  top?: number | string;
  /** CSS `left` property */
  left?: number | string;
  /** CSS `bottom` property */
  bottom?: number | string;
  /** CSS `right` property */
  right?: number | string;
  zIndex?: number;
}
