import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokens } from "ui";
const { color, layout } = tokens;

const StyledCardList = styled.div`
  display: grid;
  grid-gap: 32px;
  text-decoration: none;
  ${layout.media.smallTablet} {
    grid-template-columns: repeat(2, auto);
  }
  ${layout.media.tablet} {
    grid-template-columns: repeat(3, 208px);
    grid-gap: 40px;
  }
  ${layout.media.largeTablet} {
    grid-template-columns: repeat(4, 208px);
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
`;
export { StyledCardList, StyledLink };
