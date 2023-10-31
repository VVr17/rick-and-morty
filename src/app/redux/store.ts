import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charactersReducer from 'app/redux/characters/charactersSlice';
import currentCharacterReducer from 'app/redux/currentCharacter/currentCharacterSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    currentCharacter: currentCharacterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
