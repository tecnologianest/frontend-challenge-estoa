import { Logo } from '../..';
import * as S from './Header.styles';

export function Header() {
  return (
    <S.Header>
      <S.Content className="container">
        <Logo id={'header-logo'} />
      </S.Content>
    </S.Header>
  );
}
