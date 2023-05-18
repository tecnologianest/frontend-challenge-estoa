import { useContext } from 'react';
import { Card } from '../components';
import { Loading } from '../components/Loading';
import { CharactersContext } from '../context';

export function Home() {
  const { characters, isLoading } = useContext(CharactersContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      {characters?.map((char) => (
        <Card key={char.name} {...char} />
      ))}
    </section>
  );
}
