import { createGlobalStyle } from "styled-components";
import { Color, lightTheme, darkTheme, reset, tokens } from "ui";
const { color } = tokens;

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    ${color.text.white};
    ${color.themeBackground.primaryBg};
  }
  html[theme='light']{
    ${lightTheme};
  }
  html[theme='dark']{
    ${darkTheme}
  }
`;
