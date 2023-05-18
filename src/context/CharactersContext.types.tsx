export interface CharacterProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterPropsResults;
}

export type CharacterPropsResults = Array<
  Record<
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
  > &
    Record<'films' | 'species' | 'starships' | 'vehicles', Array<string>>
>;
