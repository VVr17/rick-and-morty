import { gql } from '@apollo/client';
import { characterFragment, locationFragment } from 'services/fragments';

export const FETCH_LOCATIONS = gql`
  query FetchLocations(
    $page: Int!
    $name: String
    $type: String
    $dimension: String
  ) {
    locations(
      page: $page
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

export const FETCH_SINGLE_LOCATION = gql`
  query FetchLocationById($id: ID!) {
    location(id: $id) {
      ...LocationParts
      residents {
        ...CharacterParts
      }
    }
  }
  ${characterFragment}
  ${locationFragment}
`;
