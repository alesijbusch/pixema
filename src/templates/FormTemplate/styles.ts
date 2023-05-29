import styled from "styled-components";
import { AuthImg } from "assets";
import { tokens, typography } from "ui";
const { color, layout } = tokens;

const StyledFormTemplate = styled.div`
  background: url(${AuthImg}) center center / cover no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FormTemplateInner = styled.div`
  /* display: flex;
  align-items: center; */
`;
const LogoWrap = styled.div`
  padding: 32px 0 50px;
  position: absolute;
  top: 0;
  ${layout.media.tablet} {
    padding: 47px 0 0;
    left: 40px;
  }
  ${layout.media.desktop} {
    padding: 62px;
  }
  svg {
    margin-right: 0;
  }
`;
const CopyText = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  ${color.text.white};
  ${typography.B1}
  ${layout.media.desktop} {
    bottom: 40px;
  }
`;
export { StyledFormTemplate, LogoWrap, CopyText, FormTemplateInner };
