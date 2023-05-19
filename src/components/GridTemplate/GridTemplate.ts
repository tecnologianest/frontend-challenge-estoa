import { css, styled } from 'styled-components';

export const GridTemplate = styled.div<{ fullBleed?: boolean }>`
  display: grid;
  grid-template-columns:
    1fr
    min(60vw, 100%)
    1fr;

  & > * {
    ${({ fullBleed }) =>
      fullBleed
        ? css`
            width: 100%;
            grid-column: 1 / 4;
          `
        : css`
            grid-column: 2;
          `}
  }
`;
