import { StyledCardList, StyledLink } from "./styles";
import { CardItem } from "componets/CardItem/CardItem";
// import { CardItem } from "componets";
import { Movie } from "types";
import { generatePath } from "react-router-dom";

interface CardItemProps {
  movies: Movie[];
  link: string;
}
export const CardList = ({ movies, link }: CardItemProps) => {
  return (
    <StyledCardList>
      {movies.map((film) => (
        <StyledLink to={generatePath(link, { imdb: film.imdbID })} key={film.imdbID}>
          <CardItem film={film} />
        </StyledLink>
      ))}
    </StyledCardList>
  );
};
