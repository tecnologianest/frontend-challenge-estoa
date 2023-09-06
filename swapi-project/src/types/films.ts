export interface IFilm {
  title: string;
  url: string;
}

export interface IFilms {
  count?: number;
  next?: string;
  previous?: string;
  results?: IFilm[];
}
