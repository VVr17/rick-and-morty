/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CharacterLocationParts
// ====================================================

export interface CharacterLocationParts_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
}

export interface CharacterLocationParts {
  __typename: "Character";
  /**
   * The character's last known location
   */
  location: CharacterLocationParts_location | null;
}
