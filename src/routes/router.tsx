import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  AccountPage,
  DetailsPage,
  FavoritesPage,
  HomePage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { ROUTE } from "./routes";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
    </Route>,
  ),
);
