import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens, typography } from "ui";
const { color, layout } = tokens;

const StyledNavigation = styled.nav``;

const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 40px;
  ${typography.S1}
  ${color.text.white};
  transition: 0.3s all ease-in-out;
  ${layout.media.desktop} {
    ${color.text.secondary};
  }
  :hover {
    ${color.text.primaryLight};
    transition: 0.3s all ease-in-out;
    svg {
      path {
        fill: ${Color.primaryLight};
        transition: 0.3s all ease-in-out;
      }
    }
  }
  svg {
    margin-right: 20px;
    path {
      fill: ${Color.white};
      ${layout.media.desktop} {
        fill: ${Color.secondary};
      }
    }
  }
`;
const NavigationText = styled.div`
  ${color.text.white};
`;
export { StyledNavigation, NavigationLink, NavigationText };
