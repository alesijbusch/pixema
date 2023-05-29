import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, tokens } from "ui";

const { layout, color } = tokens;

const StyledSing = styled.div`
  width: 272px;
  ${color.themeBackground.wrapBg};
  border-radius: 10px;
  padding: 25px;

  ${layout.media.smallTablet} {
    width: 450px;
  }
  ${layout.media.tablet} {
    width: 574px;
    padding: 40px;
  }
`;
const FormText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${Color.secondary};
  text-align: center;
  margin-top: 24px;
  ${layout.media.tablet} {
    margin-top: 32px;
    font-size: 16px;
    line-height: 24px;
  }
`;
const FormLink = styled(Link)`
  color: ${Color.primary};
  text-decoration: none;
`;
const FormLinkText = styled(Link)`
  color: ${Color.secondary};
  text-decoration: none;
  transition: 0.3s all ease-in-out;
  font-weight: 500;
  font-size: 14px;
  :hover {
    color: ${Color.primary};
  }
`;
export { StyledSing, FormText, FormLink, FormLinkText };
