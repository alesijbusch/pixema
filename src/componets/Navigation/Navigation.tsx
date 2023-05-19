import React from "react";
import { NavigationLink, StyledNavigation } from "./styles";
import { ROUTE } from "routes";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </NavigationLink>
      <NavigationLink to={ROUTE.TRENDS}>
        <TrendsIcon />
        Trends
      </NavigationLink>
      <NavigationLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        Favorites
      </NavigationLink>
      <NavigationLink to={ROUTE.ACCOUNT}>
        <SettingsIcon />
        Settings
      </NavigationLink>
    </StyledNavigation>
  );
};
