import {
  Movie,
  MovieApi,
  MovieDetails,
  MovieDetailsApi,
  MovieResponse,
  MovieResponseApi,
} from "types";

const transformMovieApi = ({ Search, Response, totalResults }: MovieResponseApi): MovieResponse => {
  return {
    search: transformMovie(Search),
    response: Response,
    totalResults: totalResults,
  };
};

const transformMovie = (movies: MovieApi[]): Movie[] => {
  return movies.map(({ imdbID, Title, Year, Type, Poster }) => {
    return {
      imdbID: imdbID,
      title: Title,
      year: Year,
      type: Type,
      poster: Poster,
    };
  });
};

const transformMovieDetails = (details: MovieDetailsApi): MovieDetails => {
  return {
    title: details.Title,
    year: details.Year,
    rated: details.Rated,
    released: details.Released,
    runtime: details.Runtime,
    genre: details.Genre,
    director: details.Director,
    writer: details.Writer,
    actors: details.Actors,
    plot: details.Plot,
    language: details.Language,
    country: details.Country,
    awards: details.Awards,
    poster: details.Poster,
    ratings: details.Ratings.map((rating) => {
      return { source: rating.Source, value: rating.Value };
    }),
    metascore: details.Metascore,
    imdbRating: details.imdbRating,
    imdbVotes: details.imdbVotes,
    imdbID: details.imdbID,
    type: details.Type,
    dVD: details.DVD,
    boxOffice: details.BoxOffice,
    production: details.Production,
    website: details.Website,
    response: "True",
  };
};

export { transformMovieApi, transformMovieDetails };
