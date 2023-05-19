import { css } from "styled-components";
import { Color } from "ui";

const lightTheme = css`
  --primary-text: ${Color.dark};
  --primary-bg: ${Color.white};
  --secondary-bg: ${Color.white};
  --block-bg: ${Color.white};
  --input_bg: ${Color.white};
`;

const darkTheme = css`
  --primary-text: ${Color.white};
  --primary-bg: ${Color.black};
  --secondary-bg: ${Color.graphite};
  --block-bg: ${Color.dark};
  --input_bg: ${Color.graphite};
`;

export { lightTheme, darkTheme };
