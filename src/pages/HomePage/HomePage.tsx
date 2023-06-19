import { ShowMore, Spinner } from "componets";
import { CardList } from "componets/CardList/CardList";
import React, { useEffect, useState } from "react";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";
import { ROUTE } from "routes";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handlePage = () => setPage((prevPage) => ++prevPage);
  const moviesWords = [
    "Pirates of the Caribbean",
    "banana",
    "fast",
    "avengers",
    "apple",
    "car",
    "solider",
  ];
  const title = moviesWords[Math.floor(Math.random() * moviesWords.length)];

  useEffect(() => {
    dispatch(fetchMovies({ title, page }));
  }, [dispatch, page]);

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {movies.length > 0 && <CardList movies={movies} link={ROUTE.DETAILS} />}
      {movies.length > 9 && <ShowMore onClick={handlePage} />}
    </Content>
  );
};
