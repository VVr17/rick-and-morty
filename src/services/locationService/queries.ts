import { gql } from '@apollo/client';
import { characterFragment } from 'services/characterFragment';

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
        id
        name
        type
        dimension
        residents {
          ...CharacterParts
        }
      }
    }
  }
  ${characterFragment}
`;
