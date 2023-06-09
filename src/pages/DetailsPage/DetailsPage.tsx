import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Content } from "ui";
import {
  Details,
  DetailsGenre,
  DetailsPageTitle,
  DetailsPoster,
  DetailsPosterGroup,
  DetailsTitle,
  Plot,
  SliderWrapper,
  StickerDefault,
  StickerReating,
  StickersGroup,
  StyledFavorites,
  StyledImdbIcon,
  Table,
  Tbody,
  TdCellName,
  TdCellValue,
  Tr,
} from "./styles";
import {
  addFavorites,
  fetchMovieDetails,
  selectMovieDetails,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "store";
import { Slider, Spinner } from "componets";
import { FavoritesIcon, NoPhotoImg } from "assets";

import { Movie } from "types";
import { transformMovieApi } from "mappers";
import { ROUTE } from "routes";

export const DetailsPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { imdb } = useParams();
  const { isLoading, movieDetails, error } = useAppSelector(selectMovieDetails);
  const { isAuth } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieDetails(imdb));
  }, [dispatch, imdb]);

  const getRandomWord = (word: string) => {
    const wordsToRemove = [
      "are",
      "am",
      "is",
      "the",
      "of",
      "in",
      "a",
      "at",
      "on",
      "to",
      "for",
      "from",
      "i",
      "my",
    ];

    const processWords = new RegExp("\\b(" + wordsToRemove.join("|") + ")\\b", "gi");

    const cleanString = word
      .replace(processWords, "")
      .split(" ")
      .filter((item) => item);
    return cleanString[Math.floor(Math.random() * cleanString.length)];
  };

  const movieKey = "73417f5e";
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${movieKey}&i=${imdb}`)
      .then((response) => response.json())
      .then((data) => getRandomWord(data.Title))
      .then((data) => fetch(`https://www.omdbapi.com/?apikey=${movieKey}&s=${data}`))
      .then((data) => data.json())
      .then((data) => transformMovieApi(data))
      .then((data) => {
        if (data.search) {
          setMovies(data.search);
        }
      });
  }, [imdb]);

  const addFavoriteHandler = (item: Movie) => {
    if (isAuth) {
      dispatch(addFavorites(item));
    } else {
      navigate(ROUTE.BACK_SIGN_IN);
    }
  };

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {movieDetails && (
        <Details>
          <DetailsGenre>{movieDetails?.genre.split(",").join(", ")}</DetailsGenre>
          <DetailsTitle>{movieDetails.title}</DetailsTitle>
          <StickersGroup>
            <StickerReating reating={+movieDetails.imdbRating}>
              {movieDetails.imdbRating}
            </StickerReating>
            <StickerDefault>
              <StyledImdbIcon /> {movieDetails.imdbRating}
            </StickerDefault>
            <StickerDefault>{movieDetails.runtime}</StickerDefault>
          </StickersGroup>
          <DetailsPosterGroup>
            <DetailsPoster
              src={
                movieDetails.poster === "N/A" || movieDetails.poster === ""
                  ? `${NoPhotoImg}`
                  : movieDetails.poster
              }
            />
            <StyledFavorites onClick={() => addFavoriteHandler(movieDetails)}>
              <FavoritesIcon />
            </StyledFavorites>
          </DetailsPosterGroup>
          <Plot>{movieDetails.plot}</Plot>
          <Table>
            <Tbody>
              <Tr>
                <TdCellName>Year</TdCellName>
                <TdCellValue>{movieDetails.year}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Released</TdCellName>
                <TdCellValue>{movieDetails.released}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>BoxOffice</TdCellName>
                <TdCellValue>{movieDetails.boxOffice}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Country</TdCellName>
                <TdCellValue>{movieDetails.country}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Production</TdCellName>
                <TdCellValue>{movieDetails.production}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Actors</TdCellName>
                <TdCellValue>{movieDetails.actors}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Director</TdCellName>
                <TdCellValue>{movieDetails.director}</TdCellValue>
              </Tr>
              <Tr>
                <TdCellName>Writers</TdCellName>
                <TdCellValue>{movieDetails.writer}</TdCellValue>
              </Tr>
            </Tbody>
          </Table>
          <SliderWrapper>
            <DetailsPageTitle>Recommendations</DetailsPageTitle>
            <Slider name={movies} />
          </SliderWrapper>
        </Details>
      )}
    </Content>
  );
};
