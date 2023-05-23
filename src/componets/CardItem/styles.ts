import styled from "styled-components";
import { typography } from "ui";
import { tokens } from "ui";
import { spaces } from "ui";
const { color, layout } = tokens;

const StyledCardItem = styled.div`
  position: relative;
`;
const Title = styled.p`
  ${typography.S2}
  ${color.themeText.primaryText};
  transition: 0.3s all ease-in-out;
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  border-radius: 15px;
  ${spaces.mb24}
  ${layout.media.smallTablet} {
    height: 367px;
  }
  ${layout.media.tablet} {
    height: 308px;
  }
  ${layout.media.desktop} {
    height: 394px;
  }
`;

export { StyledCardItem, Title, Poster };
