import { HtmlHTMLAttributes } from 'react';
import * as S from './PageTemplate.style';
export function PageTemplate({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLElement>) {
  return <S.Wrapper className="container">{children}</S.Wrapper>;
}
