import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "ui";
import {
  Details,
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
  Table,
  Tbody,
  TdCellName,
  TdCellValue,
  Tr,
} from "./styles";
import { faBookmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { MovieDetailsApi } from "types";

export const DetailsPage = () => {
  const [movie, setMovie] = useState<MovieDetailsApi | undefined>();
  const { name } = useParams();

  const movieKey = "73417f5e";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${name}&plot=full`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [name]);
  console.log(movie);

  return (
    <Content>
      <Details>
        <DetailsGenre>
          {movie?.Genre.split(",").join(", ")}
          {/* <FontAwesomeIcon icon={faCircle} /> */}
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
        <Table>
          <Tbody>
            <Tr>
              <TdCellName>Year</TdCellName>
              <TdCellValue>{movie?.Year}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Released</TdCellName>
              <TdCellValue>{movie?.Released}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>BoxOffice</TdCellName>
              <TdCellValue>{movie?.BoxOffice}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Country</TdCellName>
              <TdCellValue>{movie?.Country}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Production</TdCellName>
              <TdCellValue>{movie?.Production}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Actors</TdCellName>
              <TdCellValue>{movie?.Actors}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Director</TdCellName>
              <TdCellValue>{movie?.Director}</TdCellValue>
            </Tr>
            <Tr>
              <TdCellName>Writers</TdCellName>
              <TdCellValue>{movie?.Writer}</TdCellValue>
            </Tr>
          </Tbody>
        </Table>
      </Details>
    </Content>
  );
};
