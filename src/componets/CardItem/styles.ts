import { Link } from "react-router-dom";
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
  :hover {
    ${color.text.primary};
  }
`;
// const Ganre = styled.span`
//   ${typography.B1}
//   ${color.text.light};
// `;
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
// const Rating = styled.span`
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   border-radius: 6px;
//   padding: 2px 7px;
//   ${color.background.green};
//   ${typography.B1}
// `;
export { StyledCardItem, Title, Poster };
