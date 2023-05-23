import { configureStore } from "@reduxjs/toolkit";
import { movieDetailsReducer, moviesReducer, trendsReducer } from "store";

export const store = configureStore({
  reducer: {
    mavies: moviesReducer,
    mavieDetails: movieDetailsReducer,
    trends: trendsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
