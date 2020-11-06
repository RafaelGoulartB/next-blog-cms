import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = ["360px", "768px", "1024px", "1500px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans- serif",
    heading: "Poppins, sans-serif",
    mono: "Poppins, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    light: 300,
    normal: 400,
    bold: 500,
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    lg: '15px'
  },
  fontSizes: {
    ...theme.fontSizes,
    '3xl': '26px',
    '4xl': '38px',
    '5xl': '46px',
    '6xl': '52px'
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      200: "#9BAEC2",
      500: "#212529"
    },
    blue: {
      ...theme.colors.blue,
      500: '#4070f4'
    }
  },
  breakpoints
}

export default customTheme
