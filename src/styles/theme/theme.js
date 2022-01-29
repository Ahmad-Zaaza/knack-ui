const keyframes = require("./extendTheme/keyframes");
const animation = require("./extendTheme/animation");
const colors = require("./extendTheme/colors");
const textColor = require("./extendTheme/textColor");
const backgroundColor = require("./extendTheme/backgroundColor");
const backgroundImage = require("./extendTheme/backgroundImage");
const screens = require("./extendTheme/screens");
const zIndex = require("./extendTheme/zIndex");
const fontSize = require("./fontSize");

module.exports = {
  container: {
    center: true,
    padding: "1rem"
  },
  fontSize,
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
    animation,
    keyframes,
    colors,
    textColor,
    backgroundColor,
    backgroundImage,
    screens,
    zIndex
  }
};
