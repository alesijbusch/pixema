import { Header, Sidebar } from "componets";
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
