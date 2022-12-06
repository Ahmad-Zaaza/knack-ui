const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-rtl-direction"
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(
      (f) => f.test?.toString() !== "/\\.css$/"
    );
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,

      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "Knack_[local]_[hash:base64:8]"
            },
            sourceMap: true,
            importLoaders: 1
          }
        },
        "postcss-loader"
      ],
      include: path.resolve(__dirname, "../")
    });
    // Return the altered config
    return config;
  }
};
