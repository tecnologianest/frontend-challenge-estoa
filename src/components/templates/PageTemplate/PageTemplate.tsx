import { HtmlHTMLAttributes } from 'react';
import * as S from './PageTemplate.style';
export function PageTemplate({
  children,
  className,
  ...props
}: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <S.Wrapper className={[className, 'container'].join(' ')} {...props}>
      {children}
    </S.Wrapper>
  );
}
