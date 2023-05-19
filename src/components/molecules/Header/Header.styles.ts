import { css, styled } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    height: ${theme.headerHeight};
    width: 100%;
    box-shadow: 0px 3px 2px rgb(0 0 0 / 0.05);
    background-color: white;
    z-index: ${theme.zIndex.header};
  `};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
