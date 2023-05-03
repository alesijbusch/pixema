import { Movie } from 'types';
import { Ganre, Poster, Rating, StyledCardItem, Title } from './styles';

interface CardItemProps {
  film: Movie;
}

export const CardItem = ({ film }: CardItemProps) => {
  return (
    <StyledCardItem>
      <Poster src={film.Poster} />
      <Title>{film.Title}</Title>
      <Ganre>Adventure - Action - Fantasy</Ganre>
      <Rating>7.6</Rating>
    </StyledCardItem>
  );
};
