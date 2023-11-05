import { FetchCharacterList_characters_results_location } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchEpisodes_episodes_results_characters_location } from 'services/episodeService/__generated__/FetchEpisodes';
import { FetchLocations_locations_results_residents_location } from 'services/locationService/__generated__/FetchLocations';

export type LocationType =
  | FetchCharacterList_characters_results_location
  | FetchLocations_locations_results_residents_location
  | FetchEpisodes_episodes_results_characters_location
  | null;
