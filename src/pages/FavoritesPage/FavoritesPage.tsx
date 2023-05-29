import { CardList } from "componets";
import { ROUTE } from "routes";
import { selectFavorites, useAppSelector } from "store";
import { Content } from "ui";
import { EmptyFavorites, EmptyInner } from "./styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(selectFavorites);

  return (
    <Content>
      {favorites.length === 0 && (
        <EmptyInner>
          <EmptyFavorites />
        </EmptyInner>
      )}
      {favorites.length > 0 && (
        <CardList isFavorite movies={favorites} link={ROUTE.RECOMMENDATIONS} />
      )}
    </Content>
  );
};
