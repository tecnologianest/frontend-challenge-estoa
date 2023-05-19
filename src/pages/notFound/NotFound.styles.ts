import { css, styled } from 'styled-components';
import { PageTemplate } from '../../components';

export const Wrapper = styled(PageTemplate)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.md};
    height: ${`calc(100dvh - ${theme.headerHeight})`};
  `}
`;
