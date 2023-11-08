import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { HISTORY_KEY } from 'constants/storageKey';

interface IHistory {
  history: string[];
}

const initialState: IHistory = {
  history: [],
};

export const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistoryItem: (state, { payload }) => {
      state.history.unshift(payload);
    },
  },
});

const persistConfig = {
  key: HISTORY_KEY,
  storage,
  whitelist: [HISTORY_KEY],
};

export const historyReducer = history.reducer;
export const { setHistoryItem } = history.actions;

export default persistReducer(persistConfig, historyReducer);
