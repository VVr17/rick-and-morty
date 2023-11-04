import { gql } from '@apollo/client';

export const FETCH_EPISODES = gql`
  query FetchEpisodes($name: String!, $episode: String!) {
    episodes(page: 1, filter: { name: $name, episode: $episode }) {
      info {
        count
        pages
      }
      results {
        id
        name
        characters {
          id
          name
          status
          image
          species
          gender
          type
          location {
            id
            type
            name
            dimension
          }
          episode {
            id
            name
            episode
          }
        }
      }
    }
  }
`;
