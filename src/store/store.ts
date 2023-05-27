import { configureStore } from "@reduxjs/toolkit";
import {
  movieDetailsReducer,
  moviesReducer,
  searchReducer,
  trendsReducer,
  userReducer,
} from "store";

export const store = configureStore({
  reducer: {
    mavies: moviesReducer,
    mavieDetails: movieDetailsReducer,
    trends: trendsReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
