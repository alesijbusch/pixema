import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tokens, typography } from 'ui';
const { color, layout } = tokens;

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
  }
`;
const StyledNavigationIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  font-size: 20px;
`;

export { StyledNavigation, NavigationLink, StyledNavigationIcon };
