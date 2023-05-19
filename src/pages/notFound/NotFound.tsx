import { Link } from 'react-router-dom';
import { Button } from '../../components';
import * as S from './NotFound.styles';

export function NotFound() {
  return (
    <S.Wrapper>
      <h1>Error 404</h1>
      <p>Page not found, please go Home</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </S.Wrapper>
  );
}
