import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, MovieResponse, MovieResponseApi } from "types";

interface trendState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
}

const movieKey = "73417f5e";

export const fetchTrends = createAsyncThunk<MovieResponse, string, { rejectValue: string }>(
  "trends/fetchTrends",
  async (title, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<MovieResponseApi>(
        `https://www.omdbapi.com/?apikey=${movieKey}&s=${title}`,
      );
      console.log(transformMovieApi(data));
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: trendState = {
  trends: [],
  isLoading: false,
  error: null,
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload.search;
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
