import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme, reset, tokens } from "ui";
const { color } = tokens;

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    ${color.themeText.primaryText};
    ${color.themeBackground.primaryBg};
  }
  html[theme='light']{
    ${lightTheme};
  }
  html[theme='dark']{
    ${darkTheme}
  }
`;
