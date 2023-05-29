import { css } from "styled-components";
import { Color } from "ui";

const lightTheme = css`
  --primary-text: ${Color.dark};
  --secondary-text: ${Color.dark};
  --primary-bg: ${Color.white};
  --secondary-bg: ${Color.light};
  --block-bg: ${Color.light};
  --wrap-bg: ${Color.white};
  --input_bg: ${Color.white};
  --outline_bg: ${Color.light};
  --fill_bg: ${Color.white};
  --logo_bg: ${Color.dark};
`;

const darkTheme = css`
  --primary-text: ${Color.white};
  --secondary-text: ${Color.white};
  --primary-bg: ${Color.black};
  --secondary-bg: ${Color.graphite};
  --block-bg: ${Color.dark};
  --wrap-bg: ${Color.dark};
  --input_bg: ${Color.graphite};
  --outline_bg: ${Color.graphite};
  --fill_bg: ${Color.light};
  --logo_bg: ${Color.white};
`;

export { lightTheme, darkTheme };
