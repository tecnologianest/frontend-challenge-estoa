import { css, styled } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-block-start: ${theme.headerHeight};
    padding-top: ${theme.spacing.lg};
  `}
`;
