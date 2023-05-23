import React from "react";
import { NavigationLink, StyledNavigation } from "./styles";
import { ROUTE } from "routes";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";

interface NavigationProps {
  handleClose?: () => void;
}
export const Navigation = ({ handleClose }: NavigationProps) => {
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
      <NavigationLink to={ROUTE.FAVORITES} onClick={handleClose}>
        <FavoritesIcon />
        Favorites
      </NavigationLink>
      <NavigationLink to={ROUTE.ACCOUNT} onClick={handleClose}>
        <SettingsIcon />
        Settings
      </NavigationLink>
    </StyledNavigation>
  );
};
