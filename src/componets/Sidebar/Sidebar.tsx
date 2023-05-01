import React from "react";
import { Copy, StyledSidebar } from "./styles";
import { Navigation } from "componets";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <Navigation />
      <Copy>© All Rights Reserved</Copy>
    </StyledSidebar>
  );
};
