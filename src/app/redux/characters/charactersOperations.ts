import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchEpisodes,
  fetchCharactersList,
  fetchCharacterListByIds,
  fetchLocations,
} from 'app/api';
import {
  getCharactersByEpisodes,
  getCharacterIdsByPage,
  getCharactersByLocations,
  getInfoMessage,
} from 'utils/fetchUtils';
import { defaultCharacters } from 'constants/states';
import { ICharacters } from 'types';
import { FIRST_PAGE } from 'constants/listConstants';

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (query: ISearchQuery, { rejectWithValue }): Promise<ICharacters> => {
    try {
      const response = await fetchCharactersList(query);

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const { results, info } = response.data.characters;

      return {
        data: results,
        totalPages: info.pages,
        info: null,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCharactersByEpisode = createAsyncThunk(
  'charactersByEpisode/fetch',
  async (query: ISearchQuery, { rejectWithValue }): Promise<ICharacters> => {
    try {
      const { page } = query;
      const response = await fetchEpisodes({ ...query, page: FIRST_PAGE });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const {
        results: episodes,
        info: { pages: totalEpisodePages },
      } = response.data.episodes;

      if (!episodes || !episodes.length) return defaultCharacters;

      const characters = getCharactersByEpisodes(episodes);
      const { currentCharacterIds, totalPages } = getCharacterIdsByPage(
        characters,
        query,
        'episode',
        page
      );

      if (!currentCharacterIds.length) return defaultCharacters;

      const { data } = await fetchCharacterListByIds(currentCharacterIds);
      const info = getInfoMessage('episode', totalEpisodePages);

      return {
        data: data.charactersByIds,
        totalPages,
        info,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCharactersByLocation = createAsyncThunk(
  'charactersByLocation/fetch',
  async (query: ISearchQuery, { rejectWithValue }): Promise<ICharacters> => {
    try {
      const { page } = query;
      const response = await fetchLocations({ ...query, page: FIRST_PAGE });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      const {
        results: locations,
        info: { pages: totalLocationPages },
      } = response.data.locations;

      if (!locations || !locations.length) return defaultCharacters;

      const characters = getCharactersByLocations(locations);
      const { currentCharacterIds, totalPages } = getCharacterIdsByPage(
        characters,
        query,
        'location',
        page
      );

      if (!currentCharacterIds.length) return defaultCharacters;

      const { data } = await fetchCharacterListByIds(currentCharacterIds);
      const info = getInfoMessage('location', totalLocationPages);

      return {
        data: data.charactersByIds,
        totalPages,
        info,
      };
    } catch (error) {
      throw error;
    }
  }
);
