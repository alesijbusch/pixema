import { CardList } from "componets/CardList/CardList";
import React, { useEffect, useState } from "react";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const words = ["Pirates of the Caribbean", "banana", "fast", "avengers", "apple"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    dispatch(fetchMovies(randomWord));
  }, [dispatch]);

  return (
    <Content>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}error</div>}
      {movies?.length > 0 && <CardList movies={movies} />}
    </Content>
  );
};
