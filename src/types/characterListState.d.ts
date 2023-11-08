import { CharacterType } from './character';

interface ICharactersState {
  characterList: (CharacterType | null)[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}
