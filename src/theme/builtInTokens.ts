import {
  AdvancedMediaQueries,
  ColorPalleteMap,
  KnackTheme,
  KnackThemeMediaQueries,
  MediaQueries,
  ThemeBorderRadiuses,
  ThemeColors,
  ThemeElevation
} from "./theme.types";

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500
};

export const basicQueries: MediaQueries = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const advancedQueries: AdvancedMediaQueries = {
  precisePointerDevices: "(pointer:fine)",
  hoverSupported: "(hover:hover)",
  hoverPointerDevices: () =>
    `${advancedQueries.hoverSupported} and ${advancedQueries.hoverPointerDevices}`
};

export const builtInQueries: KnackThemeMediaQueries = {
  ...basicQueries,
  ...advancedQueries
};

export const lightThemeElevations: ThemeElevation = {
  0: {},

  1: {
    "box-shadow": `0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`
  },
  2: {
    "box-shadow":
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
  },
  3: {
    "box-shadow":
      "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)"
  },
  4: {
    "box-shadow":
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  5: {
    "box-shadow":
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)"
  },
  6: {
    "box-shadow":
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"
  },
  7: {
    "box-shadow":
      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
  },
  8: {
    "box-shadow":
      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)"
  },
  9: {
    "box-shadow":
      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)"
  },
  10: {
    "box-shadow":
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)"
  }
};

export const darkThemeElevations: ThemeElevation = {
  0: {},
  1: {
    "box-shadow": `0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)
    )`
  },
  2: {
    "box-shadow":
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07))`
  },
  3: {
    "box-shadow":
      "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))`
  },
  4: {
    "box-shadow":
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))`
  },
  5: {
    "box-shadow":
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))`
  },
  6: {
    "box-shadow":
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))`
  },
  7: {
    "box-shadow":
      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11))`
  },
  8: {
    "box-shadow":
      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))`
  },
  9: {
    "box-shadow":
      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))`
  },
  10: {
    "box-shadow":
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "background-image": `linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13))`
  }
};

export const SemanticThemes = {
  warning: {
    // color: "hsl(30, 100%, 50%)",
    // color: "hsl(45, 100%, 51%)",
    color: "hsla(32, 90%, 50%)",
    hue: "32",
    saturation: "90%",
    lightness: "50%"
  },
  info: {
    // color: "hsl(205, 100%, 49%)",
    color: "hsl(188, 78%, 41%)",
    hue: "188",
    saturation: "100%",
    lightness: "49%"
  },
  success: {
    color: "hsl(134, 61%, 41%)",
    // color: "hsl(128, 100%, 35%)",
    // color: "hsl(116, 46%, 49%)",
    hue: "134",
    saturation: "61%",
    lightness: "41%"
  },
  danger: {
    // color: "hsl(340, 95%, 60%)",
    color: "hsl(354, 70%, 54%)",
    hue: "354",
    saturation: "70%",
    lightness: "54%"
  }
};

export const grayPalette: ColorPalleteMap = {
  50: "hsl(228, 29%, 97%)",
  100: "hsl(233, 17%, 90%)",
  200: "hsl(224, 10%, 79%)",
  300: "hsl(231, 8%, 69%)",
  400: "hsl(226, 8%, 57%)",
  500: "hsl(231, 6%, 45%)",
  600: "hsl(230, 8%, 31%)",
  700: "hsl(226, 13%, 19%)",
  800: "hsl(228, 17%, 12%)"
};

export const bluePalette: ColorPalleteMap = {
  50: "hsl(202, 100%, 96%)",
  100: "hsl(206, 97%, 88%)",
  200: "hsl(207, 100%, 78%)",
  300: "hsl(202, 100%, 58%)",
  400: "hsl(205, 100%, 49%)",
  500: "hsl(208, 100%, 40%)",
  600: "hsl(212, 95%, 29%)",
  700: "hsl(213, 100%, 19%)",
  800: "hsl(213, 100%, 12%)"
};

export const redPalette: ColorPalleteMap = {
  50: "hsl(332, 100%, 97%)",
  100: "hsl(348, 100%, 92%)",
  200: "hsl(355, 100%, 84%)",
  300: "hsl(0,100%, 76%)",
  400: "hsl(357, 100%, 64%)",
  500: "hsl(347, 100%, 41%)",
  600: "hsl(351, 100%, 28%)",
  700: "hsl(353, 100%, 17%)",
  800: "hsl(0,97%, 13%)"
};
export const greenPalette: ColorPalleteMap = {
  50: "hsl(142, 95%, 93%)",
  100: "hsl(151, 76%, 78%)",
  200: "hsl(157, 66%, 61%)",
  300: "hsl(165, 100%, 38%)",
  400: "hsl(169, 100%, 31%)",
  500: "hsl(169, 100%, 24%)",
  600: "hsl(169, 89%, 17%)",
  700: "hsl(172, 100%, 10%)",
  800: "hsl(176, 100%, 6%)"
};

export const lightThemeColors: ThemeColors = {
  themes: SemanticThemes,
  primary: "hsl(230,80%,54%)",
  secondary: "hsl(296, 24%, 52%)",
  text: "hsl(222, 22%, 5%)",
  onPrimary: "hsl(0, 0%, 100%)",
  onSecondary: "hsl(0, 0%, 100%)",
  white: "hsl(0,100%,100%)",
  gray: grayPalette,
  blue: bluePalette,
  red: redPalette,
  green: greenPalette,
  paper: "hsl(0, 0%, 100%)"
};

// for now color palettes are the same.
export const darkThemeColors: ThemeColors = {
  themes: SemanticThemes,
  primary: "hsl(350, 100%, 72%)",
  secondary: "hsl(296, 24%, 52%)",
  text: "hsl(0, 0%, 98%)",
  onPrimary: "hsl(0, 0%, 98%)",
  onSecondary: "hsl(0, 0%, 98%)",
  white: "hsl(0,100%,100%)",
  gray: grayPalette,
  blue: bluePalette,
  red: redPalette,
  green: greenPalette,
  paper: "hsl(228, 17%, 12%)"
};

export const builtInBorderRadiuses: ThemeBorderRadiuses = {
  // Use for boxes and placeholder addons
  xsmall: "2px",
  small: "4px",
  // Use for inputs and widgets
  medium: "6px",
  // Use for modal Windows and popovers
  large: "12px",
  xlarge: "16px",
  full: "50%"
};

export const lightModeTheme: KnackTheme = {
  colors: lightThemeColors,
  elevations: lightThemeElevations,
  borderRadiuses: builtInBorderRadiuses,
  mediaQueries: builtInQueries,
  scaleDenominator: 4
};
export const darkModeTheme: KnackTheme = {
  colors: darkThemeColors,
  elevations: darkThemeElevations,
  borderRadiuses: builtInBorderRadiuses,
  mediaQueries: builtInQueries,
  scaleDenominator: 4
};
