import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchCharactersById_charactersByIds } from 'services/characterService/__generated__/FetchCharactersById';

export type CharacterType =
  | FetchCharacterList_characters_results
  | FetchCharactersById_charactersByIds;
