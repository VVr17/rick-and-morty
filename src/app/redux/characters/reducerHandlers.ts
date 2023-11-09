import { PayloadAction } from '@reduxjs/toolkit';
import { ICharacters, ICharactersState } from 'types';

export const handleFulfilled = (
  state: ICharactersState,
  { payload }: PayloadAction<ICharacters>
) => {
  state.characterList = payload.characterList;
  state.totalPages = payload.totalPages;
  state.info = payload.info;
  state.isLoading = false;
  state.error = null;
};

export const handlePending = (state: ICharactersState) => {
  state.isLoading = true;
};

export const handleRejected = (state: ICharactersState) => {
  state.error = 'Error during fetch data';
  state.isLoading = false;
};
