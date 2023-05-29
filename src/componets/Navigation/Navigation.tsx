import { NavigationLink, NavigationText, StyledNavigation } from "./styles";
import { ROUTE } from "routes";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { useWindowSize } from "hooks";
import { fetchLogout, selectUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  handleClose?: () => void;
}
export const Navigation = ({ handleClose }: NavigationProps) => {
  const { isAuth } = useAppSelector(selectUser);
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1440;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(fetchLogout()).then(() => {
      navigate(ROUTE.HOME);
    });
  };

  return (
    <StyledNavigation>
      <NavigationLink to={ROUTE.HOME} onClick={handleClose}>
        <HomeIcon />
        Home
      </NavigationLink>
      <NavigationLink to={ROUTE.TRENDS} onClick={handleClose}>
        <TrendsIcon />
        Trends
      </NavigationLink>
      {isAuth && (
        <>
          <NavigationLink to={ROUTE.FAVORITES} onClick={handleClose}>
            <FavoritesIcon />
            Favorites
          </NavigationLink>
          <NavigationLink to={ROUTE.ACCOUNT} onClick={handleClose}>
            <SettingsIcon />
            Settings
          </NavigationLink>
        </>
      )}
      {isMobile &&
        (isAuth ? (
          <NavigationText onClick={handleLogout}>Log Out</NavigationText>
        ) : (
          <NavigationLink to={ROUTE.SIGN_IN} onClick={handleClose}>
            Sign In
          </NavigationLink>
        ))}
    </StyledNavigation>
  );
};
