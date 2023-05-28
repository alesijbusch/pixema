import styled from "styled-components";
import { tokens } from "ui";
const { color, layout } = tokens;

const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 100vh;
  position: relative;
`;
const NotFoundLogo = styled.div`
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
const NotFoundWrap = styled.div`
  font-size: 90px;
  ${color.text.primary};
  ${layout.media.tablet} {
    font-size: 150px;
  }
  ${layout.media.desktop} {
    font-size: 200px;
  }
`;
const NotFoundText = styled.div`
  font-size: 19px;
  margin-top: 10px;
  ${layout.media.tablet} {
    margin-top: 15px;
    font-size: 25px;
  }
  ${layout.media.desktop} {
    font-size: 31px;
    margin-top: 30px;
  }
`;
const NotFoundSub = styled.div`
  font-size: 15px;
  margin-top: 10px;
  ${layout.media.tablet} {
    margin-top: 15px;
    font-size: 17px;
  }
  ${layout.media.desktop} {
    font-size: 20px;
    margin-top: 15px;
  }
`;
export { StyledNotFoundPage, NotFoundLogo, NotFoundWrap, NotFoundText, NotFoundSub };
