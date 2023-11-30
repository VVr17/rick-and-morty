import {
  FetchCharacterList_characters_results_episode,
  FetchCharactersById_charactersByIds_episode,
} from 'services/characterService';

type EpisodeType =
  | FetchCharacterList_characters_results_episode
  | FetchCharactersById_charactersByIds_episode;
