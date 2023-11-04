import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  fetchCharacters,
  fetchCharactersByEpisode,
} from './charactersOperations';
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
      // .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
      //   if (payload?.results) {
      //     state.characterList = payload.results;
      //   }
      //   if (payload?.info?.pages) {
      //     state.totalPages = payload?.info?.pages;
      //   }
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(fetchCharacters.pending, handlePending)
      // .addCase(fetchCharacters.rejected, (state, { payload }) => {
      //   state.error = 'Error during fetch data';
      //   state.isLoading = false;
      // })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.characterList = payload.characters;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.rejected, (state, { payload }) => {
        state.error = 'Error during fetch data';
        state.isLoading = false;
      })
      .addCase(fetchCharactersByEpisode.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.characterList = payload.characters;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharactersByEpisode.pending, handlePending)
      .addCase(fetchCharactersByEpisode.rejected, (state, { payload }) => {
        state.error = 'Error during fetch data';
        state.isLoading = false;
      });
  },
});

export default charactersSlice.reducer;
