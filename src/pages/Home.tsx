import { memo } from 'react';
import { useQuery } from 'react-query';
import { Card, Loading } from '../components';
import { fetchCharacters } from '../services';

const LazyCard = memo(Card);

export function Home() {
  const { data, isLoading } = useQuery({
    queryFn: fetchCharacters,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      {data?.map((char, index) => (
        <LazyCard key={char.name} {...char} id={index + 1} />
      ))}
    </section>
  );
}
