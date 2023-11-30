import { FALLBACK } from 'constants/listConstants';

/**
 * Get an array of description fields for character card based on the provided location and episode.
 *
 * @param type - Location type string
 * @param dimension - Location dimension string.
 * @returns An array of objects containing title and value for description fields.
 */
export const getLocationDescription = (
  type: string | null,
  dimension: string | null
) => {
  return [
    { title: 'Type', value: type || FALLBACK },
    { title: 'Dimension', value: dimension || FALLBACK },
  ];
};
