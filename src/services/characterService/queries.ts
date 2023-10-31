import { gql } from '@apollo/client';

export const FETCH_CHARACTER_LIST = gql`
  query FetchCharacterList($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        name
        status
        location {
          id
          name
        }
        image
        episode {
          id
          name
        }
      }
    }
  }
`;
