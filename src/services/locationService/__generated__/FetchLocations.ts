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

export interface FetchLocations_locations_results_residents {
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
  page: number;
  name?: string | null;
  type?: string | null;
  dimension?: string | null;
}
