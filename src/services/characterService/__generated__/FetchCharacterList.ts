/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCharacterList
// ====================================================

export interface FetchCharacterList_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
  /**
   * The amount of pages.
   */
  pages: number | null;
}

export interface FetchCharacterList_characters_results_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface FetchCharacterList_characters_results_episode {
  __typename: "Episode";
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
}

export interface FetchCharacterList_characters_results {
  __typename: "Character";
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The character's last known location
   */
  location: FetchCharacterList_characters_results_location | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (FetchCharacterList_characters_results_episode | null)[];
}

export interface FetchCharacterList_characters {
  __typename: "Characters";
  info: FetchCharacterList_characters_info | null;
  results: (FetchCharacterList_characters_results | null)[] | null;
}

export interface FetchCharacterList {
  /**
   * Get the list of all characters
   */
  characters: FetchCharacterList_characters | null;
}

export interface FetchCharacterListVariables {
  page: number;
  name: string;
}
