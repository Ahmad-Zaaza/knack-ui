module.exports = {
  primary: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--primary-color), ${opacityValue})`;
    }
    return `rgb(var(--primary-color))`;
  },
  secondary: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--secondary-color), ${opacityValue})`;
    }
    return `rgb(var(--secondary-color))`;
  },
  tertiary: "rgb(var(--tertiary-color))",
  error: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--error-color), ${opacityValue})`;
    }
    return `rgb(var(--error-color))`;
  },
  success: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--success-color), ${opacityValue})`;
    }
    return `rgb(var(--success-color))`;
  },
  warning: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--warning-color), ${opacityValue})`;
    }
    return `rgb(var(--success-color))`;
  },

  body: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--bg-color), ${opacityValue})`;
    }
    return `rgb(var(--bg-color))`;
  },
  paper: "var(--paper-color)",
  overlay: "rgba(var(--overlay-color))"
};
