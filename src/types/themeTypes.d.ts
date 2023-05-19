import 'styled-components';
import { border, colors, spacing, typography } from '../shared';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    typography: typeof typography;
    spacing: typeof spacing;
    border: typeof border;
  }
}
