import gql from 'graphql-tag';

export const characterFragment = gql`
  fragment CharacterParts on Character {
    id
    name
    status
    gender
    type
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
`;
