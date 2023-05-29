import { configureStore } from "@reduxjs/toolkit";
import {
  movieDetailsReducer,
  moviesReducer,
  searchReducer,
  trendsReducer,
  userReducer,
  favoritesReducer,
  themeReducer,
} from "store";

export const store = configureStore({
  reducer: {
    mavies: moviesReducer,
    mavieDetails: movieDetailsReducer,
    trends: trendsReducer,
    search: searchReducer,
    user: userReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
