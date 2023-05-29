import { Header, Sidebar } from "componets";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";
import { selectTheme, useAppSelector } from "store";

export const MainTemplate = () => {
  const { modeTheme } = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", modeTheme);
  }, [modeTheme]);

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
