import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components';
import { CharacterProps } from '../context/CharactersContext.types';
import { getFilms, getHomeWorld, getSpecies } from '../services';

export default function Character() {
  const [character, setCharacter] = useState<CharacterProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams();

  const navigate = useNavigate();

  function handlePreview() {
    navigate(-1);
  }

  const { data } = useQuery({
    queryKey: ['character'],
    queryFn: getCharacter,
    staleTime: 0,
    refetchOnWindowFocus: false,
    enabled: id !== undefined,
  });

  async function getCharacter() {
    try {
      setIsLoading(true);
      setCharacter(null);
      const { data } = await axios.get<CharacterProps>(
        `https://swapi.dev/api/people/${id}`
      );

      const films = await getFilms(data.films);
      data.films = films;

      const species = await getSpecies(data.species);
      data.species = species;

      const homeworld = await getHomeWorld(data.homeworld);
      data.homeworld = homeworld;

      setCharacter(data);
      return data;
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading || data === undefined) {
    return <Loading />;
  }

  return (
    <main>
      <ul>
        <li>name: {character?.name}</li>
        <li>birth_year: {character?.birth_year}</li>
        <li>eye_color: {character?.eye_color}</li>
        <li>gender: {character?.gender}</li>
        <li>hair_color: {character?.hair_color}</li>
        <li>height: {character?.height}</li>
        <li>mass: {character?.mass}</li>
        <li>skin_color: {character?.skin_color}</li>
        <li>homeworld: {character?.homeworld}</li>
        <li>films: {character?.films}</li>
        <li>species: {character?.species}</li>
      </ul>
      <button onClick={handlePreview}>Back</button>
    </main>
  );
}
