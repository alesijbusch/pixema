import { Logo } from "assets";
import styled from "styled-components";
import { tokens } from "ui";
const { layout, color } = tokens;

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

  path {
    :nth-child(4) {
      fill: ${color.themeBackground.logo_bg};
    }
    :nth-child(5) {
      fill: ${color.themeBackground.logo_bg};
    }
    :nth-child(6) {
      fill: ${color.themeBackground.logo_bg};
    }
  }
`;

export { StyledLogo };
