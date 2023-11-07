import { FetchCharacterList_characters_results_location } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchCharactersById_charactersByIds_location } from 'services/characterService/__generated__/FetchCharactersById';

export type LocationType =
  | FetchCharacterList_characters_results_location
  | FetchCharactersById_charactersByIds_location
  | null;
