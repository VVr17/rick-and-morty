import { CharacterType } from './character';

export interface ICharacters {
  data: CharacterType[];
  totalPages: number;
  info: string | null;
}
