const knackPreset = require("./src/styles/theme/themePreset");
const plugin = require("tailwindcss/plugin");
const { loadConfig } = require("./configs/configLoader");

let customConfig;

try {
  const configFile = loadConfig();
  customConfig = JSON.parse(configFile);
} catch (e) {
  if (e instanceof Error && e.code === "MODULE_NOT_FOUND") {
    console.warn("No custom knack-ui configuration file was found");
    customConfig = {};
  }
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [knackPreset],
  // User configurations goes here, because it overrides the preset
  theme: { extend: customConfig },
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      // Add a `second` variant, ie. `second:pb-0`
      addVariant("second", "&>:nth-child(n+2)");
    })
  ]
};
