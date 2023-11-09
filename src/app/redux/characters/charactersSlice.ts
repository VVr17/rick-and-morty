import { createSlice } from '@reduxjs/toolkit';

import { initialCharactersState } from 'constants/initialCharactersState';
import {
  fetchCharacters,
  fetchCharactersByEpisode,
  fetchCharactersByLocation,
} from './charactersOperations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './reducerHandlers';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.fulfilled, handleFulfilled)
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(fetchCharacters.rejected, handleRejected)
      .addCase(fetchCharactersByEpisode.fulfilled, handleFulfilled)
      .addCase(fetchCharactersByEpisode.pending, handlePending)
      .addCase(fetchCharactersByEpisode.rejected, handleRejected)
      .addCase(fetchCharactersByLocation.fulfilled, handleFulfilled)
      .addCase(fetchCharactersByLocation.pending, handlePending)
      .addCase(fetchCharactersByLocation.rejected, handleRejected);
  },
});

export default charactersSlice.reducer;
