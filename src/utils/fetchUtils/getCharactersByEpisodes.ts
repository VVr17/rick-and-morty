import { CharacterType } from 'types/character';
import { FetchEpisodes_episodes_results } from 'services/episodeService/__generated__/FetchEpisodes';

export const getCharactersByEpisodes = (
  episodes: FetchEpisodes_episodes_results[]
) => {
  return Array.from(
    new Set(episodes.flatMap(episode => episode.characters))
  ) as CharacterType[];
};
