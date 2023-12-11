import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLocations } from 'app/api';
import { ILocations } from 'types';

export const fetchAllLocations = createAsyncThunk(
  'locations/fetch',
  async (query: ISearchQuery, { rejectWithValue }): Promise<ILocations> => {
    try {
      const response = await fetchLocations(query);

      if (!response || !response?.data) {
        throw new Error('Something went wrong');
      }

      const { results, info } = response?.data.locations;

      return {
        data: results,
        totalPages: info.pages,
      };
    } catch (error) {
      throw error;
    }
  }
);
