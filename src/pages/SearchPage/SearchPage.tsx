import { CardList, Spinner } from "componets";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSearch, fetchTrends, selectSearch, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";

export const SearchPage = () => {
  const { title } = useParams();
  const { isLoading, search, error } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  //const title = searchParams.get("title");

  useEffect(() => {
    if (title) {
      dispatch(fetchSearch(title));
    }
  }, [dispatch, title]);

  // useEffect(() => {
  //   if (title) {
  //     fetch(searchUrl + title)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.Search) {
  //           setMovies(data.Search);
  //         }
  //       });
  //   }
  // }, [title]);

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      <CardList movies={search} link={ROUTE.DETAILS_TRENDS} />
    </Content>
  );
};
