import {
  FetchCharacterList_characters_results_location,
  FetchCharactersById_charactersByIds_location,
} from 'services/characterService';

type LocationType =
  | FetchCharacterList_characters_results_location
  | FetchCharactersById_charactersByIds_location;
