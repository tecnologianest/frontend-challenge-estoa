import axios from 'axios';
import {
  CharacterProps,
  FilmProps,
  HomeworldProps,
  PromiseProps,
  SpecieProps,
} from '../types';

const BASE_URL = 'https://swapi.dev/api/people';

export async function fetchCharacters() {
  const characters: CharacterProps[] = [];
  let nextPage: string | null = BASE_URL;

  while (nextPage) {
    const response = await axios.get<PromiseProps>(nextPage);
    const data: PromiseProps = response.data;
    nextPage = data.next;
    characters.push(...data.results);
  }

  const speciesPromises = characters.map((character) =>
    getSpecies(character.species)
      .then((species) => ({ ...character, species }))
      .catch(() => ({ ...character, species: 'Unknown' }))
  );

  const charactersWithSpecies = await Promise.all(speciesPromises);

  return charactersWithSpecies;
}

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
  const hasSpecie = speciesList.length > 0;

  if (!hasSpecie) {
    return ['unknown'];
  }

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
