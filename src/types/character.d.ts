import {
  FetchCharacterList_characters_results,
  FetchCharactersById_charactersByIds,
} from 'services/characterService';

export type CharacterType =
  | FetchCharacterList_characters_results
  | FetchCharactersById_charactersByIds;
