export interface PromiseProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterProps[];
}

export interface CharacterProps
  extends Record<
      | 'birth_year'
      | 'created'
      | 'edited'
      | 'eye_color'
      | 'gender'
      | 'hair_color'
      | 'height'
      | 'homeworld'
      | 'mass'
      | 'name'
      | 'skin_color'
      | 'url',
      string
    >,
    Record<'films' | 'species' | 'starships' | 'vehicles', Array<string>> {
  id: number;
}

export interface FilmProps {
  title: string;
}

export interface SpecieProps {
  name: string;
}

export interface HomeworldProps {
  name: string;
}
