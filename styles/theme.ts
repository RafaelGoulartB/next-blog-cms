import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = ["360px", "768px", "1024px", "1500px"];
// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Inter, sans- serif",
    heading: "Inter, sans-serif",
    mono: "Inter, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
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
      500: "#4A5568",
      800: "#2D3748"
    },
    purple: {
      ...theme.colors.purple,
      500: "#6a47bd"
    }
  },
  breakpoints
}

export default customTheme
