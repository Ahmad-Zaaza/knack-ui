// preview.js
import ThemeProvider from "../src/theme/ThemeProvider";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-US", right: "LTR", title: "English (United States)" },

        { value: "ar", right: "RTL", title: "Arabic" }
      ]
    }
  }
};

export const parameters = {
  rtlDirection: {
    // Collection to set as RTL (You can add language or with add country code specifically)
    autoLocales: ["ar", "pa-PK"],
    // Condition to reload the page each time locale is updated
    reload: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider mode='light'>
      <Story />
    </ThemeProvider>
  )
];
