import React from "react";
import { NavigationLink, StyledNavigation } from "./styles";
import { StyledLink } from "componets/CardList/styles";
import { ROUTE } from "routes";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationLink to={ROUTE.HOME}>
        <i className="fas fa-rocket"></i>Home
      </NavigationLink>
      <NavigationLink to={ROUTE.TRENDS}>Trends</NavigationLink>
      <NavigationLink to={ROUTE.FAVORITES}>Favorites</NavigationLink>
      <NavigationLink to={ROUTE.ACCOUNT}>Settings</NavigationLink>
    </StyledNavigation>
  );
};
