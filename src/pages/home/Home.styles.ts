import styled, { css } from 'styled-components';
import { PageTemplate } from '../../components/';

export const Home = styled(PageTemplate)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: ${theme.spacing.md};
  `}
`;
