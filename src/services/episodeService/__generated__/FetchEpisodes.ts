/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchEpisodes
// ====================================================

export interface FetchEpisodes_episodes_info {
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

export interface FetchEpisodes_episodes_results_characters_location {
  __typename: "Location";
  /**
   * The id of the location.
   */
  id: string | null;
  /**
   * The type of the location.
   */
  type: string | null;
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
}

export interface FetchEpisodes_episodes_results_characters {
  __typename: "Character";
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
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * The character's last known location
   */
  location: FetchEpisodes_episodes_results_characters_location | null;
}

export interface FetchEpisodes_episodes_results {
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
   * List of characters who have been seen in the episode.
   */
  characters: (FetchEpisodes_episodes_results_characters | null)[];
}

export interface FetchEpisodes_episodes {
  __typename: "Episodes";
  info: FetchEpisodes_episodes_info | null;
  results: (FetchEpisodes_episodes_results | null)[] | null;
}

export interface FetchEpisodes {
  /**
   * Get the list of all episodes
   */
  episodes: FetchEpisodes_episodes | null;
}

export interface FetchEpisodesVariables {
  name: string;
  episode: string;
}
