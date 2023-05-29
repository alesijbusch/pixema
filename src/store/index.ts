import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import moviesReducer from "./feautures/movies/moviesSlice";
import movieDetailsReducer from "./feautures/movieDetails/movieDetailsSlice";
import trendsReducer from "./feautures/trends/trendsSlice";
import searchReducer from "./feautures/search/searchSlice";
import userReducer from "./feautures/user/userSlice";
import favoritesReducer from "./feautures/favorites/favoritesSlice";
import { fetchMovies } from "./feautures/movies/moviesSlice";
import { selectMovies } from "./selectors/moviesSelectors";
import { fetchMovieDetails } from "./feautures/movieDetails/movieDetailsSlice";
import { selectMovieDetails } from "./selectors/movieDetailsSelectors";
import { selectUser } from "./selectors/userSelectors";
import { fetchTrends } from "./feautures/trends/trendsSlice";
import { selectTrends } from "./selectors/trendsSelectors";
import { fetchSearch } from "./feautures/search/searchSlice";
import { selectSearch } from "./selectors/searchSelectors";
import { fetchSignUpUser } from "./feautures/user/userSlice";
import { fetchSignInUser } from "./feautures/user/userSlice";
import { fetchLogout } from "./feautures/user/userSlice";
import { selectFavorites } from "./selectors/favoritesSelectors";
import { favoritesSlice } from "./feautures/favorites/favoritesSlice";
import { addFavorites } from "./feautures/favorites/favoritesSlice";
import { removeFavorites } from "./feautures/favorites/favoritesSlice";

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
  userReducer,
  selectUser,
  fetchSignUpUser,
  fetchSignInUser,
  fetchLogout,
  favoritesReducer,
  selectFavorites,
  favoritesSlice,
  addFavorites,
  removeFavorites,
};
