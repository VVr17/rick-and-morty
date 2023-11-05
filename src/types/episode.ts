import { FetchCharacterList_characters_results_episode } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchEpisodes_episodes_results_characters_episode } from 'services/episodeService/__generated__/FetchEpisodes';
import { FetchLocations_locations_results_residents_episode } from 'services/locationService/__generated__/FetchLocations';

export type EpisodeType =
  | FetchCharacterList_characters_results_episode
  | FetchLocations_locations_results_residents_episode
  | FetchEpisodes_episodes_results_characters_episode;
