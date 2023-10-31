import { gql } from '@apollo/client';

export const FETCH_CHARACTER_LIST = gql`
  query FetchCharacterList($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
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
        }
        image
        species
        episode {
          id
          name
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
      }
      image
      gender
      episode {
        id
        name
      }
    }
  }
`;
