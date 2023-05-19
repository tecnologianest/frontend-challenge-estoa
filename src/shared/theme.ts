import { DefaultTheme } from 'styled-components';

export const colors = {
  background: '#fff',
  foreground: '#333',
  primary: {
    100: 'hsl(203, 98%, 43%)',
    200: 'hsl(203, 98%, 38%)',
  },
};

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
};

export const themes: {
  light: DefaultTheme;
} = {
  light: { colors, typography, spacing, border },
};
