/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CharacterEpisodeParts
// ====================================================

export interface CharacterEpisodeParts_episode {
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

export interface CharacterEpisodeParts {
  __typename: "Character";
  /**
   * Episodes in which this character appeared.
   */
  episode: (CharacterEpisodeParts_episode | null)[];
}
