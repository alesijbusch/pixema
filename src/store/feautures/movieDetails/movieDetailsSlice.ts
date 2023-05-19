import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieDetails } from "mappers";
import { MovieDetails, MovieDetailsApi } from "types";

interface movieDetailsState {
  movieDetails: MovieDetails | null;
  isLoading: boolean;
  error: string | null;
}

const movieKey = "73417f5e";

export const fetchMovieDetails = createAsyncThunk<
  MovieDetails,
  string | undefined,
  { rejectValue: string }
>("movieDetails/fetchMovieDetails", async (imdb, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<MovieDetailsApi>(
      `https://www.omdbapi.com/?apikey=${movieKey}&i=${imdb}&plot=full`,
    );

    return transformMovieDetails(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: movieDetailsState = {
  movieDetails: null,
  isLoading: false,
  error: null,
};

const MovieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movieDetails = payload;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default MovieDetailsSlice.reducer;
