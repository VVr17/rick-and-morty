import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { initialCharactersState } from 'constants/states';
import {
  fetchCharacters,
  fetchCharactersByEpisode,
  fetchCharactersByLocation,
} from './charactersOperations';
import { handlePending, handleRejected } from '../reducerHandlers';
import { ICharacters, ICharactersState } from 'types';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.fulfilled, handleCharacterFulfilled)
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.rejected, handleRejected)
      .addCase(fetchCharactersByEpisode.fulfilled, handleCharacterFulfilled)
      .addCase(fetchCharactersByEpisode.pending, handlePending)
      .addCase(fetchCharactersByEpisode.rejected, handleRejected)
      .addCase(fetchCharactersByLocation.fulfilled, handleCharacterFulfilled)
      .addCase(fetchCharactersByLocation.pending, handlePending)
      .addCase(fetchCharactersByLocation.rejected, handleRejected);
  },
});

const handleCharacterFulfilled = (
  state: ICharactersState,
  { payload }: PayloadAction<ICharacters>
) => {
  state.data = payload.data;
  state.totalPages = payload.totalPages;
  state.info = payload.info;
  state.isLoading = false;
  state.error = null;
};

export default charactersSlice.reducer;
