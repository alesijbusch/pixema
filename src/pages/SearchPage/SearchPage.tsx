import { CardList, ShowMore, Spinner } from "componets";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSearch, selectSearch, useAppDispatch, useAppSelector } from "store";
import { Content } from "ui";

export const SearchPage = () => {
  const { title } = useParams();
  const { isLoading, search, error } = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handlePage = () => setPage((prevPage) => ++prevPage);

  useEffect(() => {
    if (title) {
      dispatch(fetchSearch(title));
    }
  }, [dispatch, title, page]);

  return (
    <Content>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      <CardList movies={search} link={ROUTE.DETAILS_TRENDS} />
      {search.length > 9 && <ShowMore onClick={handlePage} />}
    </Content>
  );
};
