import { gql } from '@apollo/client';
import { characterFragment } from 'services/fragments/characterFragment';
import { locationFragment } from 'services/fragments/locationFragment';

export const FETCH_LOCATIONS = gql`
  query FetchLocations($name: String, $type: String, $dimension: String) {
    locations(
      page: 1
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      info {
        count
        pages
      }
      results {
        ...LocationParts
        residents {
          ...CharacterNameParts
        }
      }
    }
  }
  ${characterFragment}
  ${locationFragment}
`;
