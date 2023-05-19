import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, MovieResponse, MovieResponseApi } from "types";

interface moviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const movieKey = "73417f5e";

export const fetchMovies = createAsyncThunk<MovieResponse, string, { rejectValue: string }>(
  "movies/fetchMovies",
  async (title, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<MovieResponseApi>(
        `https://www.omdbapi.com/?apikey=${movieKey}&s=${title}`,
      );

      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: moviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload.search;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
