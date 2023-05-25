import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import moviesReducer from "./feautures/movies/moviesSlice";
import movieDetailsReducer from "./feautures/movieDetails/movieDetailsSlice";
import trendsReducer from "./feautures/trends/trendsSlice";
import searchReducer from "./feautures/search/searchSlice";
import { fetchMovies } from "./feautures/movies/moviesSlice";
import { selectMovies } from "./selectors/moviesSelectors";
import { fetchMovieDetails } from "./feautures/movieDetails/movieDetailsSlice";
import { selectMovieDetails } from "./selectors/movieDetailsSelectors";
import { fetchTrends } from "./feautures/trends/trendsSlice";
import { selectTrends } from "./selectors/trendsSelectors";
import { fetchSearch } from "./feautures/search/searchSlice";
import { selectSearch } from "./selectors/searchSelectors";
import { store } from "./store";

export {
  store,
  moviesReducer,
  fetchMovies,
  useAppDispatch,
  useAppSelector,
  selectMovies,
  movieDetailsReducer,
  fetchMovieDetails,
  selectMovieDetails,
  trendsReducer,
  selectTrends,
  fetchTrends,
  selectSearch,
  fetchSearch,
  searchReducer,
};
