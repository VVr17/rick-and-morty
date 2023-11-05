import { FetchLocations_locations_results } from 'services/locationService/__generated__/FetchLocations';
import { CharacterType } from 'types/character';

export const getCharactersByLocations = (
  locations: FetchLocations_locations_results[]
) => {
  return locations.flatMap(
    location =>
      (location?.residents ? location.residents : []) as CharacterType[]
  );
};
