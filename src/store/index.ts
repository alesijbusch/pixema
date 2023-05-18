import { fetchMovies } from "./feautures/movies/moviesSlice";
import moviesReducer from "./feautures/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { store } from "./store";

export { store, moviesReducer, fetchMovies, useAppDispatch, useAppSelector, selectMovies };
