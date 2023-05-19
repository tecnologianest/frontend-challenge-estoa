import { memo } from 'react';
import { useQuery } from 'react-query';
import { Card, Loading } from '../components';
import { fetchCharacters } from '../services';
import * as S from './Home.styles';

const LazyCard = memo(Card);

export function Home() {
  const { data, isLoading } = useQuery({
    queryFn: fetchCharacters,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Wrapper>
      {data?.map(({ name, species, birth_year }, index) => (
        <LazyCard
          id={index + 1}
          key={(name + species).replace(' ', '_')}
          name={name}
          species={species}
          birth_year={birth_year}
        />
      ))}
    </S.Wrapper>
  );
}
