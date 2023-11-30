import { FALLBACK } from 'constants/listConstants';
import { EpisodeType, LocationType } from 'types';

/**
 * Get an array of description fields for character card based on the provided location and episode.
 *
 * @param type - Character card type: 'list' or 'details'.
 * @param location - Character location object.
 * @param episode - Character episode.
 * @returns An array of objects containing title and value for description fields.
 */
export const getDescriptionFields = (
  type: 'list' | 'details',
  location: LocationType | null,
  episode: EpisodeType | null
) => {
  return [
    {
      title: 'Last known location:',
      value:
        type === 'list'
          ? `${location?.name || FALLBACK}`
          : `Name: ${location?.name || FALLBACK}`,
      option: type === 'list' ? null : `Type: ${location?.type || FALLBACK}`,
    },
    {
      title: 'First seen in:',
      value: `${episode?.name || FALLBACK}`,
      option: null,
    },
  ];
};
