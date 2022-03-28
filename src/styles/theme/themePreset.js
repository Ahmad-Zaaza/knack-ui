const keyframes = require("./extendTheme/keyframes");
const animation = require("./extendTheme/animation");
const colors = require("./extendTheme/colors");
const textColor = require("./extendTheme/textColor");
const backgroundColor = require("./extendTheme/backgroundColor");
const backgroundImage = require("./extendTheme/backgroundImage");
const screens = require("./extendTheme/screens");
const zIndex = require("./extendTheme/zIndex");
const borderRadius = require("./extendTheme/borderRadius");
const boxShadow = require("./extendTheme/boxShadow");
const fontSize = require("./fontSize");
const fontWeight = require("./fontWeight");

module.exports = {
  container: {
    center: true,
    padding: "1rem"
  },
  fontSize,
  fontWeight,
  fontFamily: {
    inter: ["Inter", "sans-serif"],
    system: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ]
  },
  extend: {
    screens,
    animation,
    keyframes,
    colors,
    textColor,
    backgroundColor,
    backgroundImage,
    boxShadow,
    borderRadius,
    zIndex
  }
};
