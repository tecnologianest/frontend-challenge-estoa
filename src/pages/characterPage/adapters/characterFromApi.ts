interface CharacterFromApi {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export const characterFromApi = (data: CharacterFromApi): Character => {
  return {
    birth_year: data.birth_year,
    created: data.created,
    edited: data.edited,
    eye_color: data.eye_color,
    films: data.films,
    gender: data.gender,
    hair_color: data.gender,
    height: data.height,
    homeworld: data.homeworld,
    mass: data.homeworld,
    name: data.name,
    skin_color: data.skin_color,
    species: data.species,
    starships: data.starships,
    url: data.url,
    vehicles: data.vehicles,
  };
};
