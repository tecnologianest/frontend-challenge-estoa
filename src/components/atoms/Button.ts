import { css, styled } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    background-color: ${theme.colors.primary[100]};
    color: ${theme.colors.background};
  `};
`;
