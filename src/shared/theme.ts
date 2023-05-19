import { DefaultTheme } from 'styled-components';

export const colors = {
  background: '#fff',
  foreground: '#333',
  neutral: {
    0: 'hsl(0,0%, 0%)',
    1: 'hsl(0,0%, 100%)',
    10: 'hsl(0,0%, 10%)',
    20: 'hsl(0,0%, 20%)',
    30: 'hsl(0,0%, 30%)',
    40: 'hsl(0,0%, 40%)',
    50: 'hsl(0,0%, 50%)',
    60: 'hsl(0,0%, 60%)',
    70: 'hsl(0,0%, 70%)',
    80: 'hsl(0,0%, 80%)',
    90: 'hsl(0,0%, 90%)',
  },
  primary: {
    100: 'hsl(203, 98%, 43%)',
    200: 'hsl(203, 98%, 38%)',
  },
} as const;

export const typography = {
  type: "'Work Sans', sans-serif",

  sizes: {
    base: '1rem',
    sm: '875rem',
    md: '1rem',
    lg: '1.5rem',
  },
} as const;

export const spacing = {
  xxs: '.25rem',
  xs: '.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
} as const;

export const border = {
  radius: '8px',
  width: '2px',
};

export const zIndex = {
  header: 100,
};

export const headerHeight = `calc(${spacing.lg} * 2)`;

const light: DefaultTheme = {
  colors,
  typography,
  spacing,
  border,
  headerHeight,
  zIndex,
} as const;

export const themes = {
  light,
};

type ThemeType = typeof light;
declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
