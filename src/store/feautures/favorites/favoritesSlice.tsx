import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Movie } from "types";

interface favoriteState {
  favorites: Movie[];
}

const storedFavorites = localStorage.getItem("favorites");
const initialState: favoriteState = {
  favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const eachFavoritesIndex = state.favorites.findIndex(
        (item) => item?.imdbID === action.payload?.imdbID,
      );

      if (eachFavoritesIndex >= 0) {
        toast.error("You cannot add this to wishlists anymore it is married!");
      } else {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorites: (state, action) => {
      const updatedFavorites = state.favorites?.filter(
        (item) => item?.imdbID !== action.payload?.imdbID,
      );
      state.favorites = updatedFavorites;
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
