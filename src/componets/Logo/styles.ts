import { Logo } from "assets";
import styled from "styled-components";
import { tokens } from "ui";
const { layout } = tokens;

const StyledLogo = styled(Logo)`
  width: 152px;
  ${layout.media.smallTablet} {
    width: 162px;
    margin-right: 78px;
  }
  ${layout.media.desktop} {
    width: 158px;
    margin-right: 146px;
  }
`;

export { StyledLogo };
