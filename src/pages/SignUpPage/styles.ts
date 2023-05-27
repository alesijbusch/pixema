import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens, typography } from "ui";
import { types } from "util";

const { layout } = tokens;

const StyledSingIn = styled.div`
  width: 574px;
  background: #242426;
  border-radius: 10px;
  padding: 40px;
`;
const FormText = styled.p`
  ${typography.B1};
  color: ${Color.secondary};
  text-align: center;
  margin-top: 24px;
  ${layout.media.tablet} {
    margin-top: 32px;
  }
`;
const FormLink = styled(Link)`
  color: ${Color.primary};
  text-decoration: none;
`;
export { StyledSingIn, FormText, FormLink };
