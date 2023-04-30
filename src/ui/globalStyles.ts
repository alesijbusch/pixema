import { createGlobalStyle } from "styled-components";
import { reset } from "ui";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Exo 2', sans-serif;
    font-style: normal
  }
`;
