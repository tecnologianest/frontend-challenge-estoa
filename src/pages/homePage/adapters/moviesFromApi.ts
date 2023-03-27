interface MoviesFromApi {
  count: number;
  next: string;
  previous: string;
  results: {
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
  }[];
}

export interface CharacterInformation {
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

interface Movies {
  count: number;
  next: string;
  previous: string;
  movies: CharacterInformation[];
}

export const moviesFromApi = (data: MoviesFromApi): Movies => {
  return {
    count: data.count,
    next: data.next,
    previous: data.previous,
    movies: data.results.map((item) => ({
      birth_year: item.birth_year,
      created: item.created,
      edited: item.edited,
      gender: item.gender,
      height: item.height,
      homeworld: item.homeworld,
      eye_color: item.eye_color,
      hair_color: item.hair_color,
      mass: item.mass,
      name: item.name,
      films: item.films,
      species: item.species,
      skin_color: item.skin_color,
      starships: item.starships,
      url: item.url,
      vehicles: item.vehicles,
    })),
  };
};
