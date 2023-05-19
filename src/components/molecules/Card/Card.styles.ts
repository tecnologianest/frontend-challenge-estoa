import { css, styled } from 'styled-components';
import { CardProps } from '.';

export const CardWrapper = styled.div<Partial<CardProps>>`
  ${({ theme }) => css`
    box-shadow: 2.8px 3.1px 10px rgba(0, 0, 0, 0.035),
      22px 25px 80px rgba(0, 0, 0, 0.07);
    background-color: white;
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.spacing.sm};
    padding-block-start: ${theme.spacing.sm};
    overflow: hidden;
    text-transform: capitalize;
  `};
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  padding-inline: ${({ theme }) => theme.spacing.sm};
`;

export const CardContent = styled.ul`
  ${({ theme }) => css`
    padding-inline: ${theme.spacing.sm};
    & > * {
      border-radius: ${theme.border.radius};
      &:nth-child(odd) {
        background-color: hsl(360, 0%, 97%);
      }
      padding: ${theme.spacing.xs};
    }
    li {
      display: flex;
      justify-content: space-between;
    }
  `}
`;

export const Details = styled.details`
  & li {
    padding: ${({ theme }) => theme.spacing.xs};
  }
`;
