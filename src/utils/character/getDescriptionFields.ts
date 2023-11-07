import { FALLBACK } from 'constants/listConstants';
import { EpisodeType } from 'types/episode';
import { LocationType } from 'types/location';

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
