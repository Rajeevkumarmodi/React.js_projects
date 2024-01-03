import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getApiConfigutation: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigutation, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
