import { Spinner, CardList } from "componets";
import React, { useEffect } from "react";
import { ROUTE } from "routes";
import { fetchTrends, selectTrends, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";

export const TrendsPage = () => {
  const { isLoading, trends, error } = useAppSelector(selectTrends);
  const dispatch = useAppDispatch();
  const trensWords = ["cat", "ring", "war", "marvel", "green", "mega"];
  const randomTrendWord = trensWords[Math.floor(Math.random() * trensWords.length)];
  useEffect(() => {
    dispatch(fetchTrends(randomTrendWord));
  }, [dispatch]);

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {trends.length > 0 && <CardList movies={trends} link={ROUTE.DETAILS_TRENDS} />}
    </Content>
  );
};
