import { FetchCharacterList_characters_results_episode } from 'services/characterService/__generated__/FetchCharacterList';
import { FetchCharactersById_charactersByIds_episode } from 'services/characterService/__generated__/FetchCharactersById';

export type EpisodeType =
  | FetchCharacterList_characters_results_episode
  | FetchCharactersById_charactersByIds_episode
  | null;
