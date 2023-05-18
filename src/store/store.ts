import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "store";

export const store = configureStore({
  reducer: {
    mavies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
