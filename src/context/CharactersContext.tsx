import axios, { AxiosResponse } from 'axios';
import { ReactNode, createContext, useState } from 'react';
import { useQuery } from 'react-query';
import * as T from './CharactersContext.types';

export const CharactersContext = createContext<{
  characters: T.CharacterPropsResults;
  isLoading: boolean;
  setCharacters: React.Dispatch<React.SetStateAction<T.CharacterPropsResults>>;
}>({
  characters: [],
  isLoading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCharacters: () => {},
});

export function CharactersProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<T.CharacterPropsResults>([]);

  const { isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getData,
  });

  async function getData() {
    let characters: T.CharacterPropsResults = [];

    // set next page to fetch
    const nextPage: string | null = 'https://swapi.dev/api/people/';

    // get only 10 results
    const response: AxiosResponse<T.CharacterProps> =
      await axios.get<T.CharacterProps>(nextPage);
    characters = [...characters, ...response.data.results];

    // get all results
    // characters = (await axios.get<T.CharacterProps>(nextPage)).data
    // while nextPage is true, it does another fetch to return all results
    // while (nextPage) {
    //   const response: AxiosResponse<T.CharacterProps> =
    //     await axios.get<T.CharacterProps>(nextPage);
    //   const { next, results } = response.data;
    //   nextPage = next;
    //   characters = [...characters, ...results];
    // }

    async function getSpecies() {
      await Promise.all(
        // loops over the data object
        characters.map(async (char, index) => {
          const speciesList: string[] = [];

          await Promise.all(
            char.species.map(async (specie) => {
              // loops over the species list and fetch each specie
              const response = await axios.get<{ name: string }>(specie);
              const specieName = response.data.name;

              // updates the data object
              speciesList.push(specieName);
              characters[index].species = [...speciesList];
            })
          );
        })
      );
    }

    await getSpecies();

    setCharacters(characters);
    return characters;
  }

  return (
    <CharactersContext.Provider
      value={{ characters, setCharacters, isLoading }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
