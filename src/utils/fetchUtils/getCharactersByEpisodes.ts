import { CharacterType } from 'types/character';
import { FetchEpisodes_episodes_results } from 'services/episodeService';

/**
 * Get a list of unique characters from an array of chosen episodes.
 *
 * @param episodes - An array of episodes with character data.
 * @returns An array of unique character objects extracted from the episodes.
 */
export const getCharactersByEpisodes = (
  episodes: FetchEpisodes_episodes_results[]
) => {
  // Use flatMap to extract characters from episodes and remove duplicates with Set.
  const charactersSet = new Set(
    episodes.flatMap(episode => episode.characters)
  );

  return Array.from(charactersSet) as CharacterType[];
};
