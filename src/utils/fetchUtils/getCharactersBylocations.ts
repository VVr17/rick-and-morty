import { CharacterType } from 'types';
import { FetchLocations_locations_results } from 'services/locationService';

/**
 * Get a list of characters from an array of locations' resident lists.
 *
 * @param locations - An array of locations with resident data.
 * @returns An array of character objects extracted from the resident lists of the locations.
 */
export const getCharactersByLocations = (
  locations: FetchLocations_locations_results[]
) => {
  return locations.flatMap(
    location =>
      (location?.residents ? location.residents : []) as CharacterType[]
  );
};
