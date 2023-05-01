import React, { useEffect, useState } from "react";
import { StyledCardList, StyledLink } from "./styles";
import { CardItem } from "componets/CardItem/CardItem";
// import { CardItem } from "componets";
import { Movie } from "types";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";

interface CardItemProps {
  movies: Movie[];
}
export const CardList = ({ movies }: CardItemProps) => {
  return (
    <StyledCardList>
      {movies.map((film) => (
        <StyledLink to={generatePath(ROUTE.DETAILS, { name: film.Title })}>
          <CardItem key={film.imdbID} film={film} />
        </StyledLink>
      ))}
    </StyledCardList>
  );
};
