import { FALLBACK } from 'constants/listConstants';
import { EpisodeType, LocationType } from 'types';

/**
 * Get an array of description fields for character card based on the provided location and episode.
 *
 * @param location - Character location object.
 * @param episode - Character episode.
 * @returns An array of objects containing title and value for description fields.
 */
export const getDescriptionFields = (
  location: LocationType,
  episode: EpisodeType
) => {
  return [
    {
      title: 'Last known location:',
      value: `${location?.name || FALLBACK}`,
    },
    {
      title: 'First seen in:',
      value: `${episode?.name || FALLBACK}`,
    },
  ];
};
