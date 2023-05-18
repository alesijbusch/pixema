import { configureStore } from "@reduxjs/toolkit";
import { movieDetailsReducer, moviesReducer } from "store";

export const store = configureStore({
  reducer: {
    mavies: moviesReducer,
    mavieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
