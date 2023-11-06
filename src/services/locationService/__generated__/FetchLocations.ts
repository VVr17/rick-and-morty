/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchLocations
// ====================================================

export interface FetchLocations_locations_info {
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

export interface FetchLocations_locations_results_residents_location {
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

export interface FetchLocations_locations_results_residents_episode {
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

export interface FetchLocations_locations_results_residents {
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
  location: FetchLocations_locations_results_residents_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (FetchLocations_locations_results_residents_episode | null)[];
}

export interface FetchLocations_locations_results {
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
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (FetchLocations_locations_results_residents | null)[];
}

export interface FetchLocations_locations {
  __typename: "Locations";
  info: FetchLocations_locations_info | null;
  results: (FetchLocations_locations_results | null)[] | null;
}

export interface FetchLocations {
  /**
   * Get the list of all locations
   */
  locations: FetchLocations_locations | null;
}

export interface FetchLocationsVariables {
  name?: string | null;
  type?: string | null;
  dimension?: string | null;
}
