import axios, { AxiosResponse } from 'axios';
import { ReactNode, createContext, useState } from 'react';
import { useQuery } from 'react-query';
import * as T from './CharactersContext.types';

export const CharactersContext = createContext<{
  characters: T.CharacterResultsListProps;
  isLoading: boolean;
  setCharacters: React.Dispatch<
    React.SetStateAction<T.CharacterResultsListProps>
  >;
}>({
  characters: [],
  isLoading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCharacters: () => {},
});

export function CharactersProvider({ children }: { children: ReactNode }) {
  const [characters, setCharacters] = useState<T.CharacterResultsListProps>([]);

  const { isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: getData,
  });

  async function getData() {
    let characters: T.CharacterResultsListProps = [];

    // set next page to fetch
    const nextPage: string | null = 'https://swapi.dev/api/people/';

    // get only 10 results
    const { data }: AxiosResponse<T.CharacterProps> =
      await axios.get<T.CharacterProps>(nextPage);
    characters = [...characters, ...data.results];

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

    async function getFilms() {
      await Promise.all(
        // loops over the data object
        characters.map(async (char, index) => {
          const filmsList: string[] = [];

          await Promise.all(
            char.films.map(async (film) => {
              // loops over the films list and fetch each film
              const response = await axios.get<{ title: string }>(film);
              const filmName = response.data.title;

              // updates the data object
              filmsList.push(filmName);
              characters[index].films = [...filmsList];
            })
          );
        })
      );
    }

    await getFilms();

    async function getHomeWorld() {
      await Promise.all(
        characters.map(async (char, index) => {
          const { data } = await axios.get<{ name: string }>(char.homeworld);
          characters[index].homeworld = data.name;
        })
      );
    }

    await getHomeWorld();

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
