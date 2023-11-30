import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import charactersReducer from 'app/redux/characters/charactersSlice';
import episodesReducer from 'app/redux/episodes/episodesSlice';
import locationsReducer from 'app/redux/locations/locationsSlice';
import persistedHistoryReducer from 'app/redux/history/historySlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer,
    history: persistedHistoryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
