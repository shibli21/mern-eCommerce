import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["360px", "768px", "1024px", "1440px"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
  },
  fonts,
  breakpoints: {
    sm: breakpoints[0],
    md: breakpoints[1],
    lg: breakpoints[2],
    xl: breakpoints[3],
  },
};

export default theme;
