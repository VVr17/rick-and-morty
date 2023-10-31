import { RootState } from '../store';

export const selectCurrentCharacter = (state: RootState) =>
  state.currentCharacter;
