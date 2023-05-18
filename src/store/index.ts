import { fetchMovies } from "./feautures/movies/moviesSlice";
import moviesReducer from "./feautures/movies/moviesSlice";
import movieDetailsReducer from "./feautures/movieDetails/movieDetailsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { fetchMovieDetails } from "./feautures/movieDetails/movieDetailsSlice";
import { selectMovieDetails } from "./selectors/movieDetailsSelectors";
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
};
