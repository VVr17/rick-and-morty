/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchEpisodeById
// ====================================================

export interface FetchEpisodeById_episode_characters_location {
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

export interface FetchEpisodeById_episode_characters_episode {
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

export interface FetchEpisodeById_episode_characters {
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
  location: FetchEpisodeById_episode_characters_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (FetchEpisodeById_episode_characters_episode | null)[];
}

export interface FetchEpisodeById_episode {
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
  /**
   * List of characters who have been seen in the episode.
   */
  characters: (FetchEpisodeById_episode_characters | null)[];
}

export interface FetchEpisodeById {
  /**
   * Get a specific episode by ID
   */
  episode: FetchEpisodeById_episode | null;
}

export interface FetchEpisodeByIdVariables {
  id: string;
}
