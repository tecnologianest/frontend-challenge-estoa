import { Logo } from '../..';
import * as S from './Header.styles';

export function Header() {
  return (
    <S.Header>
      <S.Content className="container">
        <Logo />
      </S.Content>
    </S.Header>
  );
}
