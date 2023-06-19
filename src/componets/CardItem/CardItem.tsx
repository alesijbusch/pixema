import { Movie } from "types";
import { Poster, StyledCardItem, Title } from "./styles";
import { NoPhotoImg } from "assets";

interface CardItemProps {
  film: Movie;
}

export const CardItem = ({ film }: CardItemProps) => {
  return (
    <StyledCardItem>
      <Poster src={film.poster === "N/A" || film.poster === "" ? `${NoPhotoImg}` : film.poster} />
      <Title>{film.title}</Title>
    </StyledCardItem>
  );
};
