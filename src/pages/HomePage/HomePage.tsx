import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import styled from "styled-components";
import { typography } from "ui";

export const HomePage = () => {
  const Wrapper = styled.div`
    ${typography.H1}
  `;
  return (
    <Wrapper>
      <h1>Home</h1>
      <Link to={ROUTE.FAVORITES}>Go to Favorites</Link>
    </Wrapper>
  );
};
