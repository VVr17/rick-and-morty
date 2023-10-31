import { FetchCharacterList } from 'services/characterService/__generated__/FetchCharacterList';

export interface ICharactersState {
  characterList: FetchCharacterList['characters'];
  isLoading: boolean;
  error: string | null;
}
