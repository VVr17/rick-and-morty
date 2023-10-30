import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  characterList: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    // setCocktailCategory(state, { payload }: PayloadAction<string>) {
    //   state.cocktailCategoriesStatus = payload;
    // },
  },
});

export const {} = charactersSlice.actions;
export default charactersSlice.reducer;
