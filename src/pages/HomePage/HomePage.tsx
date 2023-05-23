import { Spinner } from "componets";
import { CardList } from "componets/CardList/CardList";
import React, { useEffect, useState } from "react";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";
import { StyledButton } from "./styles";

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handlePage = () => setPage((prevPage) => ++prevPage);
  const words = ["Pirates of the Caribbean", "banana", "fast", "avengers", "apple"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    dispatch(fetchMovies(randomWord));
  }, [dispatch, page]);

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {movies.length > 0 && <CardList movies={movies} />}
      {movies.length && (
        <StyledButton type="button" onClick={handlePage}>
          Show more
        </StyledButton>
      )}
    </Content>
  );
};
