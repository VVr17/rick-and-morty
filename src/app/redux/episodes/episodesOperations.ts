import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEpisodes } from 'app/api';
import { IEpisodes } from 'types';

export const fetchAllEpisodes = createAsyncThunk(
  'episodes/fetch',
  async (query: ISearchQuery, { rejectWithValue }): Promise<IEpisodes> => {
    try {
      const response = await fetchEpisodes(query);

      if (!response || !response?.data) {
        throw new Error('Something went wrong');
      }

      const { results, info } = response?.data.episodes;

      return {
        data: results,
        totalPages: info.pages,
      };
    } catch (error) {
      throw error;
    }
  }
);
