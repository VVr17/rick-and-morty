import { FetchCharacterList_characters_results } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchEpisodes_episodes_results_characters } from 'services/episodeService/__generated__/FetchEpisodes';
import { FetchLocations_locations_results_residents } from 'services/locationService/__generated__/FetchLocations';

export type CharacterType =
  | FetchCharacterList_characters_results
  | FetchLocations_locations_results_residents
  | FetchEpisodes_episodes_results_characters;

export interface ICharactersState {
  characterList: (CharacterType | null)[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}
