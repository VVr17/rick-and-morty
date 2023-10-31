import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharactersState } from 'types/characters';
import { fetchCharacters } from './charactersOperations';

const initialState: ICharactersState = {
  characterList: null,
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
        state.characterList = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.pending, handlePending)
      .addCase(
        fetchCharacters.rejected,
        (state, { payload }: PayloadAction<any>) => {
          if (typeof payload === 'string') state.error = payload;
        }
      );
  },
});

export default charactersSlice.reducer;
