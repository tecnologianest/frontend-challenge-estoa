export interface ICharacter {
  name: string;
  species: string;
  birth_year: string;
  url?: string
}

export interface IPeople {
    count?: number
    next?: number
    previous?: number 
    results?: ICharacter[]
}