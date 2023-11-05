import { createAsyncThunk } from '@reduxjs/toolkit';

import { apolloClient } from 'app/graphql';
import { CharacterType } from 'types/character';
import { FETCH_CHARACTER_LIST } from 'services/characterService/queries';
import { FETCH_EPISODES } from 'services/episodeService/queries';
import { FETCH_LOCATIONS } from 'services/locationService/queries';
import { ISearchQuery } from 'types/searchQuery';
import { getGraphqlVariables } from 'utils/fetchUtils/getGraphqlVariables';
import { filterCharacters } from 'utils/fetchUtils/filterByProperty';
import { FetchEpisodes_episodes_results } from 'services/episodeService/__generated__/FetchEpisodes';
import { FIRST_PAGE } from 'constants/listConstants';
import { getCharactersByEpisodes } from 'utils/fetchUtils/getCharactersByEpisodes';
import { getCharactersByPage } from 'utils/fetchUtils/getCharactersByPage';
import { getTotalPages } from 'utils/fetchUtils/getTotalPages';
import { getCharactersByLocations } from 'utils/fetchUtils/getCharactersBylocations';

interface ICharactersResponse {
  characters: CharacterType[];
  totalPages: number;
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (
    query: ISearchQuery,
    { rejectWithValue }
  ): Promise<ICharactersResponse> => {
    try {
      const variables = getGraphqlVariables(query, 'character');

      const response = await apolloClient.query({
        query: FETCH_CHARACTER_LIST,
        variables,
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      return {
        characters: response.data.characters.results,
        totalPages: response.data.characters.info.pages,
      };
    } catch (error) {
      console.log('Error during fetch', error);
      throw error;
    }
  }
);

export const fetchCharactersByEpisode = createAsyncThunk(
  'charactersByEpisode/fetch',
  async (
    query: ISearchQuery,
    { rejectWithValue }
  ): Promise<ICharactersResponse> => {
    try {
      const { page } = query;
      const variables = getGraphqlVariables(query, 'episode');

      const response = await apolloClient.query({
        query: FETCH_EPISODES,
        variables,
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const episodes = response.data.episodes
        .results as FetchEpisodes_episodes_results[];

      if (!episodes || !episodes.length) {
        return {
          characters: [],
          totalPages: FIRST_PAGE,
        };
      }

      const characters = getCharactersByEpisodes(episodes);
      const filteredCharacters = filterCharacters(characters, query, 'episode');
      const totalPages = getTotalPages(filteredCharacters);
      const currentCharacters = getCharactersByPage(filteredCharacters, page);

      return {
        characters: currentCharacters,
        totalPages,
      };
    } catch (error) {
      console.log('Error during fetch', error);
      throw error;
    }
  }
);

export const fetchCharactersByLocation = createAsyncThunk(
  'charactersByLocation/fetch',
  async (
    query: ISearchQuery,
    { rejectWithValue }
  ): Promise<ICharactersResponse> => {
    try {
      const { page } = query;
      const variables = getGraphqlVariables(query, 'location');

      const response = await apolloClient.query({
        query: FETCH_LOCATIONS,
        variables,
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      if (!response.data.locations.results) {
        return {
          totalPages: 1,
          characters: [],
        };
      }

      const characters = getCharactersByLocations(
        response.data.locations.results
      );
      const filteredCharacters = filterCharacters(
        characters,
        query,
        'location'
      );
      const totalPages = getTotalPages(filteredCharacters);
      const currentCharacters = getCharactersByPage(filteredCharacters, page);

      return {
        characters: currentCharacters,
        totalPages,
      };
    } catch (error) {
      throw error;
    }
  }
);
