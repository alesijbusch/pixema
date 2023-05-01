import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTE } from "routes/routes";

interface MovieProps {
  Title: string;
  Plot: string;
  Year: string;
  Genre: string;
  Poster: string;
  Actors: string;
  imdbID: string;
}

export const DetailsPage = () => {
  const [movie, setMovie] = useState<MovieProps | undefined>();
  const { name } = useParams();

  const movieKey = "73417f5e";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${movieKey}&t=${name}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [name]);
  console.log(movie);

  return (
    <div>
      <h1>Details</h1>
      {movie && (
        <div>
          <img src={movie.Poster} alt="" />
          <p> {movie.Title}</p>

          <br />
          <p> {movie.Plot}</p>
          <br />
          <p> {movie.Year}</p>
          <p>{movie.imdbID}</p>
          <p> {movie.Genre}</p>

          <p> {movie.Actors}</p>
        </div>
      )}
      <br />
      <Link to={ROUTE.HOME}>go to home</Link>
    </div>
  );
};
