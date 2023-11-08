export {
  FETCH_CHARACTERS_BY_IDS,
  FETCH_CHARACTER_LIST,
  FETCH_SINGLE_CHARACTER,
} from 'services/characterService/queries';
export type {
  FetchCharactersById_charactersByIds,
  FetchCharactersById_charactersByIds_episode,
  FetchCharactersById_charactersByIds_location,
} from 'services/characterService/__generated__/FetchCharactersById';
export type {
  FetchCharacterList_characters_results,
  FetchCharacterList_characters_results_episode,
  FetchCharacterList_characters_results_location,
} from 'services/characterService/__generated__/FetchCharacterList';
export type { FetchCharacterById_character } from 'services/characterService/__generated__/FetchCharacterById';
