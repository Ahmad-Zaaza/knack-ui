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
  tertiary: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--tertiary-color), ${opacityValue})`;
    }
    return `rgb(var(--tertiary-color))`;
  },
  error: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--error-color), ${opacityValue})`;
    }
    return `rgb(var(--error-color))`;
  },
  body: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--bg-color), ${opacityValue})`;
    }
    return `rgb(var(--bg-color))`;
  },
  paper: "var(--paper-color)"
};
