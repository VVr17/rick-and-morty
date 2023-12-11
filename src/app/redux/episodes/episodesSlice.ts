import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAllEpisodes } from './episodesOperations';
import { handlePending, handleRejected } from '../reducerHandlers';
import { initialEpisodesState } from 'constants/states';
import { IEpisodes, IEpisodesState } from 'types';

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: initialEpisodesState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllEpisodes.fulfilled, handleEpisodeFulfilled)
      .addCase(fetchAllEpisodes.pending, handlePending)
      .addCase(fetchAllEpisodes.rejected, handleRejected);
  },
});

const handleEpisodeFulfilled = (
  state: IEpisodesState,
  { payload }: PayloadAction<IEpisodes>
) => {
  state.data = payload.data;
  state.totalPages = payload.totalPages;
  state.isLoading = false;
  state.error = null;
};
export default episodesSlice.reducer;
