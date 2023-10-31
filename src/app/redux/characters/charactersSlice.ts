import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCharacters } from './charactersOperations';
import { ICharactersState } from 'types/characterListState';

const initialState: ICharactersState = {
  characterList: [],
  totalPages: 1,
  isLoading: false,
  error: null,
};

const handlePending = (state: ICharactersState) => {
  state.isLoading = true;
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        if (payload?.results) {
          state.characterList = payload.results;
        }
        if (payload?.info?.pages) {
          state.totalPages = payload?.info?.pages;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
      });
  },
});

export default charactersSlice.reducer;
