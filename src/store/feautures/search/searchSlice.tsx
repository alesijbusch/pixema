import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, MovieResponse, MovieResponseApi } from "types";

interface searchState {
  search: Movie[];
  isLoading: boolean;
  error: string | null;
}
export interface searchParams {
  title: string;
  page: number;
}
const movieKey = "73417f5e";

export const fetchSearch = createAsyncThunk<MovieResponse, searchParams, { rejectValue: string }>(
  "search/fetchSearch",
  async ({ title, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<MovieResponseApi>(
        `https://www.omdbapi.com/?apikey=${movieKey}&s=${title}&page=${page}`,
      );
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: searchState = {
  search: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.search = payload.search;
    });
    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.search = [];
      }
    });
  },
});

export default searchSlice.reducer;
