import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCharacterList } from 'services/characterService/__generated__/FetchCharacterList';

import { apolloClient } from 'app/graphql';
import { FETCH_CHARACTER_LIST } from 'services/characterService/queries';
import { ICharacterQuery } from 'types/searchQuery';

export const fetchCharacters = createAsyncThunk(
  'characters/fetch',
  async (
    query: ICharacterQuery,
    { rejectWithValue }
  ): Promise<FetchCharacterList['characters']> => {
    try {
      const response = await apolloClient.query({
        query: FETCH_CHARACTER_LIST,
        variables: query,
      });

      if (!response || !response.data) {
        throw new Error('Something went wrong');
      }

      return response.data.characters;
    } catch (error) {
      throw error;
    }
  }
);
