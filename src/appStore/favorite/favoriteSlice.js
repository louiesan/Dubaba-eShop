import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: window.localStorage.getItem("favorite")
    ? JSON.parse(window.localStorage.getItem("favorite"))
    : [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const index = state.favorite.findIndex((e) => e.id === action.payload.id);
      if (index !== -1) {
        state.favorite.splice(index, 1);
      } else {
        state.favorite.push(action.payload);
      }
      window.localStorage.setItem("favorite", JSON.stringify(state.favorite));
    },
  },
});

export const { addToFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
