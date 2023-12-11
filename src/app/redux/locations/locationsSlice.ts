import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchAllLocations } from './locationsOperations';
import { handlePending, handleRejected } from '../reducerHandlers';
import { initialLocationsState } from 'constants/states';
import { ILocations, ILocationsState } from 'types';

const locationsSlice = createSlice({
  name: 'locations',
  initialState: initialLocationsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllLocations.fulfilled, handleLocationsFulfilled)
      .addCase(fetchAllLocations.pending, handlePending)
      .addCase(fetchAllLocations.rejected, handleRejected);
  },
});

const handleLocationsFulfilled = (
  state: ILocationsState,
  { payload }: PayloadAction<ILocations>
) => {
  state.data = payload.data;
  state.totalPages = payload.totalPages;
  state.isLoading = false;
  state.error = null;
};
export default locationsSlice.reducer;
