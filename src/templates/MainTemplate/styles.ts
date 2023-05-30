import styled from "styled-components";
import { tokens } from "ui";
const { layout } = tokens;

const Wrapper = styled.div`
  margin: 0 24px 48px;
  ${layout.media.smallTablet} {
    margin: 0 auto 48px;
    width: 528px;
  }
  ${layout.media.tablet} {
    margin: 0 auto 56px;
    width: 688px;
  }
  ${layout.media.largeTablet} {
    width: 928px;
  }
  ${layout.media.desktop} {
    width: 1184px;
  }
  ${layout.media.largeDesktop} {
    margin: 0 auto 64px;
    width: 1796px;
  }
`;
const Container = styled.div`
  display: flex;
`;
export { Wrapper, Container };
