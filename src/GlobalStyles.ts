import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *::after,
    *::before {
      box-sizing: inherit;
    }

    body {
      height: 100dvh;
      font-family: ${theme.typography.type};
      font-size: ${theme.typography.sizes.base};
      background-color: hsl(0, 0%, 99%);
    }

    button,
    input {
      font: inherit;
    }

    button {
      background: none;
      width: 100%;
      cursor: pointer;
      border: none;
    }

    ul,
    li {
      list-style: none;
    }

    main {
      padding: ${theme.spacing.lg};
      border-radius: ${theme.border.radius};
    }
  `};

`;
