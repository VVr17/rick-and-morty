import { gql } from '@apollo/client';
import { characterFragment } from 'services/fragments';

export const FETCH_EPISODES = gql`
  query FetchEpisodes($name: String, $episode: String) {
    episodes(page: 1, filter: { name: $name, episode: $episode }) {
      info {
        count
        pages
      }
      results {
        id
        name
        characters {
          ...CharacterNameParts
          ...CharacterLocationParts
        }
      }
    }
  }
  ${characterFragment}
`;
