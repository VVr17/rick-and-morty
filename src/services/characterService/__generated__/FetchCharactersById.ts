/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCharactersById
// ====================================================

export interface FetchCharactersById_charactersByIds_location {
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

export interface FetchCharactersById_charactersByIds_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
}

export interface FetchCharactersById_charactersByIds {
  __typename: "Character";
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * The character's last known location
   */
  location: FetchCharactersById_charactersByIds_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (FetchCharactersById_charactersByIds_episode | null)[];
}

export interface FetchCharactersById {
  /**
   * Get a list of characters selected by ids
   */
  charactersByIds: (FetchCharactersById_charactersByIds | null)[] | null;
}

export interface FetchCharactersByIdVariables {
  ids: string[];
}
