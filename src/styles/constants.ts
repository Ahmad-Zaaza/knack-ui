import {
  ThemeColors,
  ThemeElevation,
  ThemeMediaQueries
} from "../theme/theme.types";

export const COLORS: ThemeColors = {
  primary: "hsl(350, 100%, 72%)",
  secondary: "hsl(296, 24%, 52%)",
  text: "hsl(222, 22%, 5%)",
  onPrimary: "hsl(0, 0%, 98%)",
  onSecondary: "hsl(0, 0%, 98%)",
  themes: {
    alert: {
      color: "hsl(30, 100%, 50%)",
      hue: "30",
      lightness: "100%",
      saturation: "50%"
    },
    info: {
      color: "hsl(205, 100%, 49%)",
      hue: "205",
      lightness: "100%",
      saturation: "49%"
    },
    success: {
      color: "hsl(160, 100%, 40%)",
      hue: "160",
      lightness: "100%",
      saturation: "40%"
    },
    danger: {
      color: "hsl(340, 95%, 60%)",
      hue: "340",
      lightness: "95%",
      saturation: "60%"
    }
  },
  white: "hsl(0,100%,100%)",
  gray: {
    50: "hsl(228, 29%, 97%)",
    100: "hsl(233, 17%, 90%)",
    200: "hsl(224, 10%, 79%)",
    300: "hsl(231, 8%, 69%)",
    400: "hsl(226, 8%, 57%)",
    500: "hsl(231, 6%, 45%)",
    600: "hsl(230, 8%, 31%)",
    700: "hsl(226, 13%, 19%)",
    800: "hsl(228, 17%, 12%)"
  },
  blue: {
    50: "hsl(202, 100%, 96%)",
    100: "hsl(206, 97%, 88%)",
    200: "hsl(207, 100%, 78%)",
    300: "hsl(202, 100%, 58%)",
    400: "hsl(205, 100%, 49%)",
    500: "hsl(208, 100%, 40%)",
    600: "hsl(212, 95%, 29%)",
    700: "hsl(213, 100%, 19%)",
    800: "hsl(213, 100%, 12%)"
  },
  red: {
    50: "hsl(332, 100%, 97%)",
    100: "hsl(348, 100%, 92%)",
    200: "hsl(355, 100%, 84%)",
    300: "hsl(0,100%, 76%)",
    400: "hsl(357, 100%, 64%)",
    500: "hsl(347, 100%, 41%)",
    600: "hsl(351, 100%, 28%)",
    700: "hsl(353, 100%, 17%)",
    800: "hsl(0,97%, 13%)"
  },
  green: {
    50: "hsl(142, 95%, 93%)",
    100: "hsl(151, 76%, 78%)",
    200: "hsl(157, 66%, 61%)",
    300: "hsl(165, 100%, 38%)",
    400: "hsl(169, 100%, 31%)",
    500: "hsl(169, 100%, 24%)",
    600: "hsl(169, 89%, 17%)",
    700: "hsl(172, 100%, 10%)",
    800: "hsl(176, 100%, 6%)"
  },
  paper: "hsl(0, 0%, 98%)"
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500
};
export const QUERIES: ThemeMediaQueries = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  precisePointerDevices: "(pointer:fine)",
  hoverSupported: "(hover:hover)",
  hoverPointerDevices: () =>
    `${QUERIES.hoverSupported} and ${QUERIES.hoverPointerDevices}`
};

export const ELEVATIONS: ThemeElevation = {
  light: {
    0: { "box-shadow": "none" },

    1: {
      "box-shadow": `0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`
    }
  },
  dark: {
    0: {
      "box-shadow": "none",
      "background-image": `linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      )`
    },
    1: {
      "box-shadow": `0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)`,
      "background-image": `linear-gradient(
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05)
      )`
    }
  }
  // small: `
  //     0px 1px 1.3px hsla(var(--shadow-color) / 0.11),
  //     0px 1.6px 2.1px -0.7px hsla(var(--shadow-color) / 0.17),
  //     0px 3.2px 4.2px -1.3px hsl(var(--shadow-color) / 0.24);
  //     `,
  // medium: `
  //       0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
  //       0px 3.4px 4.4px -0.4px hsl(var(--shadow-color) / 0.17),
  //       0.1px 7.3px 9.5px -0.9px hsl(var(--shadow-color) / 0.22),
  //       0.1px 16.1px 20.9px -1.3px hsl(var(--shadow-color) / 0.27)
  //   `,
  // large: `
  //       0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
  //       0.1px 5.8px 7.5px -0.2px hsl(var(--shadow-color) / 0.15),
  //       0.1px 10.5px 13.6px -0.4px hsl(var(--shadow-color) / 0.18),
  //       0.1px 16.7px 21.7px -0.7px hsl(var(--shadow-color) / 0.21),
  //       0.2px 26.1px 33.9px -0.9px hsl(var(--shadow-color) / 0.24),
  //       0.4px 40.3px 52.3px -1.1px hsl(var(--shadow-color) / 0.27),
  //       0.5px 61px 79.2px -1.3px hsl(var(--shadow-color) / 0.3)
  //     `
};

export const RADIUSES = {
  // Use for boxes and placeholder addons
  small: "4px",
  // Use for inputs and widgets
  medium: "6px",
  // Use for modal Windows and popovers
  large: "12px",
  full: "50%"
};
