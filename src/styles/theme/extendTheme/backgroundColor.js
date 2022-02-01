module.exports = {
  primary: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--primary-color), ${opacityValue})`;
    }
    return `rgb(var(--primary-color))`;
  },
  body: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--bg-color), ${opacityValue})`;
    }
    return `rgb(var(--bg-color))`;
  },
  paper: "var(--paper-color)"
};
