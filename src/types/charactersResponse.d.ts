import { CharacterType } from './character';

export interface ICharacters {
  characterList: CharacterType[];
  totalPages: number;
  info: string | null;
}
