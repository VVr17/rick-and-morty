import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';

export interface ICharactersState {
  characterList: (FetchCharacterList_characters_results | null)[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}
