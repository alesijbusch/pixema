import styled from "styled-components";
import { Color, tokens } from "ui";

const { layout } = tokens;

const StyledButton = styled.button`
  align-self: center;
  border-radius: 40px;
  border: none;
  padding: 15px 60px 15px;
  background-color: ${Color.graphite};
  color: ${Color.white};
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  margin-top: 48px;
  ${layout.media.tablet} {
    font-size: 16px;
    line-height: 24px;
    margin-top: 64px;
  }
  &:hover {
    background-color: ${Color.primaryLight};
  }
`;
export { StyledButton };
