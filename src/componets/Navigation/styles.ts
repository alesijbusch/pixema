import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens, typography } from "ui";
const { color } = tokens;

const StyledNavigation = styled.div``;

const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 40px;
  ${typography.S1}
  ${color.text.secondary};
  :hover {
    ${color.text.primaryLight};
    svg {
      path {
        fill: ${Color.primaryLight};
      }
    }
  }
  svg {
    margin-right: 20px;
  }
`;

export { StyledNavigation, NavigationLink };
