import { EmptyFavoritesIcon } from "assets";
import styled from "styled-components";
import { tokens } from "ui";
const { layout } = tokens;

const EmptyFavorites = styled(EmptyFavoritesIcon)``;
const EmptyInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    width: 200px;
    margin-top: -180px;
    ${layout.media.tablet} {
      width: 250px;
    }
    ${layout.media.smallDesktop} {
      margin-top: -130px;
    }
    ${layout.media.desktop} {
      margin-top: -180px;
    }
  }
`;
export { EmptyFavorites, EmptyInner };
