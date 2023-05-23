import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens, typography } from "ui";
const { color } = tokens;

const StyledNavigation = styled.nav``;

const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 40px;
  ${typography.S1}
  ${color.text.secondary};
  transition: 0.3s all ease-in-out;
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
  }
`;

export { StyledNavigation, NavigationLink };
