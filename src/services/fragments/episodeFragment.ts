import gql from 'graphql-tag';

export const episodeFragment = gql`
  fragment EpisodeParts on Episode {
    id
    name
    episode
  }
`;
