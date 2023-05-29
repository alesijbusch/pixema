interface MovieResponseApi {
  Search: MovieApi[];
  Response: string;
  totalResults: string;
}

interface MovieResponse {
  search: Movie[];
  response: string;
  totalResults: string;
}

interface MovieApi {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface Movie {
  imdbID: string;
  title: string;
  year: string;
  type: string;
  poster: string;
}

interface MovieRatingApi {
  Source: string;
  Value: string;
}

interface MovieDetailsApi {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRatingApi[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieRating {
  source: string;
  value: string;
}

interface MovieDetails {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: MovieRating[];
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dVD: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
}

interface AuthValue {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}
enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

export type {
  MovieApi,
  MovieResponseApi,
  MovieResponse,
  Movie,
  MovieDetailsApi,
  MovieDetails,
  AuthValue,
};

export { PortalTarget };
