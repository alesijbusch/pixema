import { Header, Sidebar } from "componets";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Wrapper>
      <button onClick={toggleTheme}>theme</button>
      <Header />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </Wrapper>
  );
};
