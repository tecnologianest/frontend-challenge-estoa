import axios from 'axios';
import {
  CharacterProps,
  FilmProps,
  HomeworldProps,
  SpecieProps,
} from '../types';

const BASE_URL = 'https://swapi.dev/api/people';

export const fetchCharacters = async (): Promise<CharacterProps[]> => {
  const response = await axios.get(BASE_URL);
  const characters: CharacterProps[] = response.data.results;

  const speciesPromises = characters.map(async (character) => {
    const hasSpecie = character.species.length > 0;

    if (!hasSpecie) {
      return {
        ...character,
        species: ['no-data'],
      };
    }
    const species = await getSpecies(character.species);
    return {
      ...character,
      species,
    };
  });
  const charactersWithSpecies = await Promise.all(speciesPromises);
  return charactersWithSpecies;
};

export async function getFilms(filmsList: string[]) {
  const list: string[] = [];

  await Promise.all(
    filmsList.map(async (film) => {
      const { data } = await axios.get<FilmProps>(film);
      list.push(data.title);
    })
  );

  return list;
}

export async function getSpecies(speciesList: string[]) {
  const list: string[] = [];

  await Promise.all(
    speciesList.map(async (specie) => {
      const { data } = await axios.get<SpecieProps>(specie);
      list.push(data.name);
    })
  );

  return list;
}

export async function getHomeWorld(url: string) {
  const { data } = await axios.get<HomeworldProps>(url);
  return data.name;
}
