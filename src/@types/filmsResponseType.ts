export interface FilmsResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      title: string;
      episode_id: number;
      opening_crawl: string;
      director: string;
      producer: string;
      release_date: string;
      characters: string[];
      planets: string[];
      starships: string[];
      vehicles: string[];
      species: string[];
      created: string;
      edited: string;
      url: string;
    }
  ];
}
