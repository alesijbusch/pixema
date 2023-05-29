import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens } from "ui";
const { color, layout } = tokens;

const StyledCardList = styled.div`
  display: grid;
  grid-gap: 32px;
  text-decoration: none;

  ${layout.media.smallTablet} {
    grid-template-columns: repeat(2, auto);
  }
  ${layout.media.tablet} {
    grid-template-columns: repeat(3, 202px);
    grid-gap: 40px;
  }
  ${layout.media.largeTablet} {
    grid-template-columns: repeat(4, 202px);
  }
  ${layout.media.desktop} {
    grid-template-columns: repeat(3, 266px);
  }
  ${layout.media.largeDesktop} {
    grid-template-columns: repeat(5, 266px);
  }
`;
const StyledLink = styled(Link)`
  ${color.text.white};
  text-decoration: none;
  position: relative;
  :hover {
    p {
      ${color.text.primary};
    }
  }
`;
const CardContainer = styled.div`
  position: relative;
`;
const FavoriteRemove = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 5px 13px;
  ${color.background.graphite};
  border-radius: 6px;
  cursor: pointer;
  :hover {
    svg {
      path {
        fill: ${Color.white};
      }
    }
  }
  svg {
    path {
      transition: 0.3s all ease-in-out;
      fill: ${Color.primary};
    }
  }
`;

export { StyledCardList, StyledLink, CardContainer, FavoriteRemove };
