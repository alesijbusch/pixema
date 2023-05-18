import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import {
  AccountPage,
  DetailsPage,
  FavoritesPage,
  HomePage,
  ResetPaswordPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
} from "pages";
import { ROUTE } from "./routes";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />}></Route>
      <Route path={ROUTE.FAVORITES} element={<FavoritesPage />}></Route>
      <Route path={ROUTE.ACCOUNT} element={<AccountPage />}></Route>
      <Route path={ROUTE.DETAILS} element={<DetailsPage />}></Route>
      <Route path={ROUTE.RESET_PASWORD} element={<ResetPaswordPage />}></Route>
      <Route path={ROUTE.SIGN_IN} element={<SignInPage />}></Route>
      <Route path={ROUTE.SIGN_UP} element={<SignUpPage />}></Route>
      <Route path={ROUTE.TRENDS} element={<TrendsPage />}></Route>
    </Route>,
  ),
);
