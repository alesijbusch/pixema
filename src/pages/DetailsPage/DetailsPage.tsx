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

import { fetchMovieDetails, selectMovieDetails, useAppDispatch, useAppSelector } from "store";

export const DetailsPage = () => {
  const { imdb } = useParams();
  const { isLoading, movieDetails, error } = useAppSelector(selectMovieDetails);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovieDetails(imdb));
  }, [dispatch]);

  return (
    <Content>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movieDetails && (
        <Details>
          <DetailsGenre>
            {movieDetails?.genre.split(",").join(", ")}
            {/* <FontAwesomeIcon icon={faCircle} /> */}
          </DetailsGenre>
          <DetailsTitle>{movieDetails?.title}</DetailsTitle>
          <StickersGroup>
            <StickerReating>{movieDetails?.imdbRating}</StickerReating>
            <StickerDefault>
              <StyledImdbIcon /> {movieDetails?.imdbRating}
            </StickerDefault>
            <StickerDefault>{movieDetails?.runtime}</StickerDefault>
          </StickersGroup>
          <DetailsPosterGroup>
            <DetailsPoster src={movieDetails?.poster} alt="" />
            <StyledFavorites>
              <StyledFavoritesIcon icon={faBookmark} />
            </StyledFavorites>
          </DetailsPosterGroup>
          <Plot>{movieDetails?.plot}</Plot>
          <Table>
            <Tbody>
              <Tr>
                <TdCellName>Year</TdCellName>
                <TdCellValue>{movieDetails?.year}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Released</TdCellName>
                <TdCellValue>{movieDetails?.released}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>BoxOffice</TdCellName>
                <TdCellValue>{movieDetails?.boxOffice}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Country</TdCellName>
                <TdCellValue>{movieDetails?.country}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Production</TdCellName>
                <TdCellValue>{movieDetails?.production}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Actors</TdCellName>
                <TdCellValue>{movieDetails?.actors}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Director</TdCellName>
                <TdCellValue>{movieDetails?.director}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Writers</TdCellName>
                <TdCellValue>{movieDetails?.writer}</TdCellValue>
              </Tr>
            </Tbody>
          </Table>
        </Details>
      )}
    </Content>
  );
};
