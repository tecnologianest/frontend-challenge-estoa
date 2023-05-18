import axios, { AxiosResponse } from 'axios';
import { ReactNode, createContext } from 'react';
import { useQuery } from 'react-query';
import * as T from './CharactersContext.types';

export const CharactersContext = createContext<{
  data?: T.CharacterPropsResults;
  isLoading: boolean;
}>({ isLoading: false });

export function CharactersProvider({ children }: { children: ReactNode }) {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  });

  async function getCharacters() {
    let characters: T.CharacterPropsResults = [];

    // set next page to fetch
    let nextPage: string | null = 'https://swapi.dev/api/people/';

    // while nextPage is true, it does another fetch to return all results
    while (nextPage) {
      const response: AxiosResponse<T.CharacterProps> =
        await axios.get<T.CharacterProps>(nextPage);
      const { next, results } = response.data;
      nextPage = next;
      characters = [...characters, ...results];
    }

    async function getSpecies() {
      await Promise.all(
        // loops over the data object
        characters.map(async (char, index) => {
          await Promise.all(
            char.species.map(async (specie) => {
              // loops over the species list and fetch each specie
              const response = await axios.get<{ name: string }>(specie);
              const specieName = response.data.name;
              // updates the data object
              characters[index].species = [specieName];
            })
          );
        })
      );
    }

    await getSpecies();

    return characters;
  }

  return (
    <CharactersContext.Provider value={{ data, isLoading }}>
      {children}
    </CharactersContext.Provider>
  );
}
