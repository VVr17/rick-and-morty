import { ICharacters } from './charactersResponse';

export interface ICharactersState extends ICharacters {
  isLoading: boolean;
  error: string | null;
}
