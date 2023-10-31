import { createAsyncThunk } from '@reduxjs/toolkit';

import { apolloClient } from 'app/graphql';
import { FETCH_SINGLE_CHARACTER } from 'services/characterService/queries';
import { FetchCharacterById } from 'services/characterService/__generated__/FetchCharacterById';

export const fetchCharacter = createAsyncThunk(
  'currentCharacter/fetch',
  async (
    id: Number,
    { rejectWithValue }
  ): Promise<FetchCharacterById['character']> => {
    try {
      const response = await apolloClient.query({
        query: FETCH_SINGLE_CHARACTER,
        variables: { id },
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      return response.data.character;
    } catch (error) {
      throw error;
    }
  }
);
