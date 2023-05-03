import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Content } from 'ui';
import {
  DetailsGenre,
  DetailsPoster,
  DetailsPosterGroup,
  DetailsTitle,
  Plot,
  StickerDefault,
  StickerReating,
  StickersGroup,
  StyledFavorites,
  StyledFavoritesIcon,
  StyledImdbIcon,
} from './styles';
import { faBookmark, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { spawn } from 'child_process';

interface MovieProps {
  Title: string;
  Plot: string;
  Year: string;
  Genre: string;
  Poster: string;
  Actors: string;
  imdbID: string;
  Runtime: string;
  imdbRating: string;
  Released: string;
  BoxOffice: string;
  Country: string;
  Production: string;
  Writer: string;
  Director: string;
}

export const DetailsPage = () => {
  const [movie, setMovie] = useState<MovieProps | undefined>();
  const { name } = useParams();

  const movieKey = '73417f5e';

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${name}&plot=full`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [name]);
  console.log(movie);

  return (
    <Content>
      <DetailsGenre>
        {movie?.Genre.split(',').join(` * `)}
        <FontAwesomeIcon icon={faCircle} />
      </DetailsGenre>
      <DetailsTitle>{movie?.Title}</DetailsTitle>
      <StickersGroup>
        <StickerReating>{movie?.imdbRating}</StickerReating>
        <StickerDefault>
          <StyledImdbIcon /> {movie?.imdbRating}
        </StickerDefault>
        <StickerDefault>{movie?.Runtime}</StickerDefault>
      </StickersGroup>
      <DetailsPosterGroup>
        <DetailsPoster src={movie?.Poster} alt="" />
        <StyledFavorites>
          <StyledFavoritesIcon icon={faBookmark} />
        </StyledFavorites>
      </DetailsPosterGroup>
      <Plot>{movie?.Plot}</Plot>
    </Content>
  );
};
