import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokens, typography } from "ui";
const { color, layout } = tokens;

const StyledNavigation = styled.div``;

const NavigationLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-bottom: 40px;
  ${typography.S1}
  ${color.text.secondary};
  :hover {
    ${color.text.primaryLight};
  }
`;
export { StyledNavigation, NavigationLink };
