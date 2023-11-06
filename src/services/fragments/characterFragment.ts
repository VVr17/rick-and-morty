import gql from 'graphql-tag';
import { locationFragment } from './locationFragment';
import { episodeFragment } from './episodeFragment';

export const characterFragment = gql`
  fragment CharacterNameParts on Character {
    id
    name
    status
    gender
    type
    species
  }
  fragment CharacterLocationParts on Character {
    location {
      ...LocationParts
    }
  }
  fragment CharacterEpisodeParts on Character {
    episode {
      ...EpisodeParts
    }
  }
  fragment CharacterParts on Character {
    image
    ...CharacterNameParts
    ...CharacterLocationParts
    ...CharacterEpisodeParts
  }
  ${locationFragment}
  ${episodeFragment}
`;
