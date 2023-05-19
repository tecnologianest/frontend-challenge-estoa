import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Loading } from '../components';
import { getFilms, getHomeWorld, getSpecies } from '../services';
import { CharacterProps } from '../types';

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

  if (!character) return;

  return (
    <main>
      <Card
        key={'banana'}
        name={character.name}
        birth_year={character.birth_year}
        eye_color={character.eye_color}
        gender={character.gender}
        hair_color={character.hair_color}
        height={character.height}
        mass={character.mass}
        skin_color={character.skin_color}
        homeworld={character.homeworld}
        films={character.films}
        species={character.species}
      />
      <button onClick={handlePreview}>Back</button>
    </main>
  );
}
