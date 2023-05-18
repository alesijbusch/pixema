import styled from "styled-components";
import { tokens } from "ui";

const { layout } = tokens;

const Content = styled.div`
  margin: 0 auto;
  ${layout.media.smallTablet} {
    width: 528px;
  }
  ${layout.media.tablet} {
    margin: 0 auto;
    width: 688px;
  }
  ${layout.media.largeTablet} {
    width: 928px;
  }
  ${layout.media.desktop} {
    width: 878px;
  }
  ${layout.media.largeDesktop} {
    width: 1490px;
  }
`;

export { Content };
