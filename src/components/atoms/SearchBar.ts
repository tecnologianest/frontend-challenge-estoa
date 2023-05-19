import { css, styled } from 'styled-components';

export const SearchBar = styled.input`
  ${({ theme }) => css`
    border: none;
    outline: none;
    border-style: solid;
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    width: 100%;
    padding: ${theme.spacing.sm};
    background: ${theme.colors.neutral[1]};
    border-color: ${theme.colors.neutral[90]};

    &:focus,
    &:not(:placeholder-shown) {
      border-color: ${theme.colors.primary[100]};
    }
  `}
`;
