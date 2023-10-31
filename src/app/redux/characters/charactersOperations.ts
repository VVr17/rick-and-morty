import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCharacterList } from 'services/characterService/__generated__/FetchCharacterList';
import { ICharacterQuery } from 'types/characterQuery';

import { apolloClient } from 'app/graphql';
import { FETCH_CHARACTER_LIST } from 'services/characterService/queries';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (
    query: ICharacterQuery,
    { rejectWithValue }
  ): Promise<FetchCharacterList['characters']> => {
    const { page, name } = query;

    try {
      const response = await apolloClient.query({
        query: FETCH_CHARACTER_LIST,
        variables: { page, name },
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
