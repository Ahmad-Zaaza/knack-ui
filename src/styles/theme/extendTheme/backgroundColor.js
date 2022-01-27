module.exports = {
  body: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--bg-color), ${opacityValue})`;
    }
    return `rgb(var(--bg-color))`;
  },
  paper: "var(--paper-color)"
};
