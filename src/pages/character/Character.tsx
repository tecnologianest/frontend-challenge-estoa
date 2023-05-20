import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Loading, PageTemplate } from '../../components';
import { getFilms, getHomeWorld, getSpecies } from '../../services';
import { CharacterProps } from '../../types';

export function Character(props: React.HTMLAttributes<HTMLElement>) {
  const [character, setCharacter] = useState<CharacterProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const params: { charUrl: string | null } = location.state || {
    charUrl: null,
  };

  const { data } = useQuery({
    queryKey: ['character'],
    queryFn: getCharacter,
    staleTime: 0,
    refetchOnWindowFocus: false,
    enabled: params.charUrl !== undefined,
  });

  async function getCharacter() {
    if (params.charUrl) {
      try {
        setIsLoading(true);
        setCharacter(null);

        const { data } = await axios.get<CharacterProps>(params.charUrl);

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
  }

  return (
    <PageTemplate {...props}>
      {isLoading || data === undefined || !character ? (
        <Loading id="is-loading" />
      ) : (
        <Card
          key={character?.name.replace(' ', '_')}
          id={character?.name}
          character={{
            name: character.name,
            birth_year: character.birth_year,
            eye_color: character.eye_color,
            gender: character.gender,
            hair_color: character.hair_color,
            height: character.height,
            mass: character.mass,
            skin_color: character.skin_color,
            homeworld: character.homeworld,
            films: character.films,
            species: character.species,
          }}
          button={<Button onClick={() => navigate('/')}>BACK</Button>}
        />
      )}
    </PageTemplate>
  );
}
