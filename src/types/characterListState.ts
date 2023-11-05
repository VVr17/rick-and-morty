import { CharacterType } from './character';

export interface ICharactersState {
  characterList: (CharacterType | null)[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}
