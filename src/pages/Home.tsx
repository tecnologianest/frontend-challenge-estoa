import { useContext } from 'react';
import { Loading } from '../components/Loading';
import { CharactersContext } from '../context';

export function Home() {
  const { data, isLoading } = useContext(CharactersContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      {data?.map(({ name, species, birth_year }) => (
        <ul key={name}>
          <li>name: {name}</li>
          {species.length > 0 && (
            <details open>
              <summary>Species</summary>
              <ul>
                {species.map((specie) => (
                  <li key={name + '-' + specie}>{specie}</li>
                ))}
              </ul>
            </details>
          )}
          <li>birth year: {birth_year}</li>
        </ul>
      ))}
    </section>
  );
}
