import gql from 'graphql-tag';

export const locationFragment = gql`
  fragment LocationParts on Location {
    id
    name
    type
    dimension
  }
`;
