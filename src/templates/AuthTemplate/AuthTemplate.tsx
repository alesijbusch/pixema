import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { selectUser, useAppSelector } from "store";

export const AuthTemplate = () => {
  const { isAuth } = useAppSelector(selectUser);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.HOME} />;
};
