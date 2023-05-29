import { CardContainer, FavoriteRemove, StyledCardList, StyledLink } from "./styles";
import { CardItem } from "componets/CardItem/CardItem";
// import { CardItem } from "componets";
import { Movie } from "types";
import { generatePath } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFavorites } from "store";
import { FavoritesIcon } from "assets";

interface CardItemProps {
  movies: Movie[];
  link: string;
  isFavorite?: boolean;
  onClick?: () => void;
}
export const CardList = ({ movies, link, isFavorite, onClick }: CardItemProps) => {
  const dispatch = useDispatch();

  const removeFavoriteHandler = (item: Movie) => {
    dispatch(removeFavorites(item));
  };
  return (
    <StyledCardList>
      {movies.map((film) => (
        <CardContainer key={film.imdbID}>
          <StyledLink to={generatePath(link, { imdb: film.imdbID })}>
            <CardItem film={film} />
          </StyledLink>
          {isFavorite && (
            <FavoriteRemove onClick={() => removeFavoriteHandler(film)}>
              <FavoritesIcon />
            </FavoriteRemove>
          )}
        </CardContainer>
      ))}
    </StyledCardList>
  );
};
