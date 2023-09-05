import { ICharacter } from "./characters";

export interface ICharacterDetails extends ICharacter {
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;
  homeworld?: string;
  films?: string[];
}