import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectCharactersData = (state: RootState) => state.characters;

export const selectCharacters = createSelector(
  selectCharactersData,
  charactersData => ({
    characters: charactersData.characterList?.results,
    isLoading: charactersData.isLoading,
  })
);
