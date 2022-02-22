const theme = require("./src/styles/theme/theme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme,
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("second", "&>:nth-child(n+2)");
    })
  ]
};
