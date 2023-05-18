import React from "react";
import { NavigationLink, StyledNavigationIcon, StyledNavigation } from "./styles";
import { ROUTE } from "routes";
import { faHouse, faBookmark, faFireFlameCurved, faGear } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  return (
    <StyledNavigation>
      <NavigationLink to={ROUTE.HOME}>
        <StyledNavigationIcon icon={faHouse} />
        Home
      </NavigationLink>
      <NavigationLink to={ROUTE.TRENDS}>
        <StyledNavigationIcon icon={faFireFlameCurved} flip="horizontal" />
        Trends
      </NavigationLink>
      <NavigationLink to={ROUTE.FAVORITES}>
        <StyledNavigationIcon icon={faBookmark} />
        Favorites
      </NavigationLink>
      <NavigationLink to={ROUTE.ACCOUNT}>
        <StyledNavigationIcon icon={faGear} />
        Settings
      </NavigationLink>
    </StyledNavigation>
  );
};
