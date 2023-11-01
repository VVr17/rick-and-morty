import { gql } from '@apollo/client';

export const FETCH_CHARACTER_LIST = gql`
  query FetchCharacterList(
    $page: Int!
    $name: String!
    $status: String!
    $type: String!
    $gender: String!
    $species: String!
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        location {
          id
          name
          type
          dimension
        }
        image
        species
        episode {
          id
          name
          episode
        }
      }
    }
  }
`;

export const FETCH_SINGLE_CHARACTER = gql`
  query FetchCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      location {
        id
        name
        type
        dimension
      }
      image
      gender
      episode {
        id
        name
        episode
      }
    }
  }
`;
