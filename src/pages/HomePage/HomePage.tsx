import { Sidebar } from "componets";
import { CardList } from "componets/CardList/CardList";
import React, { useEffect, useState } from "react";
import { Movie } from "types";
import { Content } from "ui";

export const HomePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const movieKey = "73417f5e";
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=star+wars`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  return (
    <Content>
      <CardList movies={movies} />
    </Content>
  );
};
