import { css, styled } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: ${theme.spacing.sm};
  `}
`;
