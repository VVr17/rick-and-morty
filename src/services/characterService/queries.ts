import { gql } from '@apollo/client';
import { characterFragment } from 'services/fragments/characterFragment';

export const FETCH_CHARACTER_LIST = gql`
  query FetchCharacterList(
    $page: Int!
    $name: String
    $status: String
    $type: String
    $gender: String
    $species: String
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
        ...CharacterParts
      }
    }
  }
  ${characterFragment}
`;

export const FETCH_SINGLE_CHARACTER = gql`
  query FetchCharacterById($id: ID!) {
    character(id: $id) {
      ...CharacterParts
    }
  }
  ${characterFragment}
`;

export const FETCH_CHARACTERS_BY_IDS = gql`
  query FetchCharactersById($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      ...CharacterParts
    }
  }
  ${characterFragment}
`;
