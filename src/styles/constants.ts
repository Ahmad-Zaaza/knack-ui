export const COLORS = {
  primary: "hsl(350, 100%, 72%)",
  primaryAccent: "hsl(350deg, 100%, 86%)",
  primaryBackground: "hsla(350deg, 100%, 72%, 0.1)",
  primaryHover: "hsl(350deg, 68%, 60%)",
  secondary: "hsl(296deg, 24%, 52%)",
  secondaryBackground: "background: hsla(296deg, 24%, 52%, 0.1)",
  text: "hsl(222deg, 22%, 5%)",
  onPrimary: "hsl(0, 0%, 98%)",
  onSecondary: "hsl(0, 0%, 98%)",

  // white
  // background: "hsl(0deg, 0%, 100%)",
  // Figma file background
  background: "hsl(220, 60%, 98%);",
  alert: "hsl(30deg, 100%, 50%)",
  success: "hsl(160deg, 100%, 40%)",
  successBackground: "hsla(160deg, 100%, 40%, 0.1)",
  danger: "hsl(340deg, 95%, 60%)",
  white: "hsl(0deg,100%,100%)",
  gray: {
    50: "hsl(228, 29%, 97%)",
    100: "hsl(233, 17%, 90%)",
    200: "hsl(224, 10%, 79%)",
    300: "hsl(231, 8%, 69%)",
    400: "hsl(226, 8%, 57%)",
    500: "hsl(231, 6%, 45%)",
    600: "hsl(230, 8%, 31%)",
    700: "hsl(226, 13%, 19%)",
    800: "	hsl(228, 17%, 12%)"
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
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  precisePointerDevices: "(pointer:fine)",
  hoverSupported: "(hover:hover)",
  hoverPointerDevices: () =>
    `${QUERIES.hoverSupported} and ${QUERIES.hoverPointerDevices}`
};

export const ELEVATIONS = {
  small: `
      0px 1px 1.3px hsla(var(--shadow-color) / 0.11),
      0px 1.6px 2.1px -0.7px hsla(var(--shadow-color) / 0.17),
      0px 3.2px 4.2px -1.3px hsl(var(--shadow-color) / 0.24);
      `,
  medium: `
        0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
        0px 3.4px 4.4px -0.4px hsl(var(--shadow-color) / 0.17),
        0.1px 7.3px 9.5px -0.9px hsl(var(--shadow-color) / 0.22),
        0.1px 16.1px 20.9px -1.3px hsl(var(--shadow-color) / 0.27)
    `,
  // medium: `
  //   3.4px 3.4px 3.4px -6px hsl(var(--shadow-color) / 0.7),
  //   8.6px 8.5px 7.3px -6px hsl(var(--shadow-color) / 0.5),
  //   17.7px 17.3px 14.8px -6px hsl(var(--shadow-color) / 0.4),
  //   36.5px 35.7px 30.6px -6px hsl(var(--shadow-color) / 0.3),
  //   100px 98px 84px -6px hsl(var(--shadow-color) / 0.2)
  // `,
  large: `
        0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
        0.1px 5.8px 7.5px -0.2px hsl(var(--shadow-color) / 0.15),
        0.1px 10.5px 13.6px -0.4px hsl(var(--shadow-color) / 0.18),
        0.1px 16.7px 21.7px -0.7px hsl(var(--shadow-color) / 0.21),
        0.2px 26.1px 33.9px -0.9px hsl(var(--shadow-color) / 0.24),
        0.4px 40.3px 52.3px -1.1px hsl(var(--shadow-color) / 0.27),
        0.5px 61px 79.2px -1.3px hsl(var(--shadow-color) / 0.3)
      `
};
