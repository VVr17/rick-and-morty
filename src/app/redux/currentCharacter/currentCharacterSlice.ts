import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICharactersState } from 'types/characterListState';
import { ICharacterState } from 'types/characterState';
import { fetchCharacter } from './currentCharacterOperations';

const initialState: ICharacterState = {
  data: null,
  isLoading: false,
  error: null,
};

const handlePending = (state: ICharacterState) => {
  state.data = null;
  state.isLoading = true;
};

const currentCharacter = createSlice({
  name: 'currentCharacter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacter.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharacter.pending, handlePending)
      .addCase(fetchCharacter.rejected, (state, { payload }) => {
        if (typeof payload === 'string') state.error = payload;
      });
  },
});

export default currentCharacter.reducer;
