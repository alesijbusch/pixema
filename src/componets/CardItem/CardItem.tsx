import { Movie } from "types";
import { Poster, StyledCardItem, Title } from "./styles";

interface CardItemProps {
  film: Movie;
}

export const CardItem = ({ film }: CardItemProps) => {
  return (
    <StyledCardItem>
      <Poster src={film.poster} />
      <Title>{film.title}</Title>
      {/* <Ganre>Adventure - Action - Fantasy</Ganre>
      <Rating>7.6</Rating> */}
    </StyledCardItem>
  );
};
