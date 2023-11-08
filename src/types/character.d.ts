import {
  FetchCharacterList_characters_results,
  FetchCharactersById_charactersByIds,
} from 'services/characterService';

type CharacterType =
  | FetchCharacterList_characters_results
  | FetchCharactersById_charactersByIds;
