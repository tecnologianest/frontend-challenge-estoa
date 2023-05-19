import * as S from './Loading.styles';

export function Loading() {
  return (
    <S.Wrapper>
      <S.Loading viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </S.Loading>
    </S.Wrapper>
  );
}
