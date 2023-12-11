import { gql } from '@apollo/client';
import { characterFragment, episodeFragment } from 'services/fragments';

export const FETCH_EPISODES = gql`
  query FetchEpisodes($page: Int!, $name: String, $episode: String) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
      info {
        count
        pages
      }
      results {
        ...EpisodeParts
        characters {
          ...CharacterNameParts
          ...CharacterLocationParts
        }
      }
    }
  }
  ${characterFragment}
  ${episodeFragment}
`;

export const FETCH_SINGLE_EPISODE = gql`
  query FetchEpisodeById($id: ID!) {
    episode(id: $id) {
      ...EpisodeParts
      characters {
        ...CharacterParts
      }
    }
  }
  ${characterFragment}
  ${episodeFragment}
`;
