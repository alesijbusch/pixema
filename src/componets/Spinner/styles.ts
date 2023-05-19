import styled from "styled-components";
import { Color } from "ui";
const StyledSpinner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loading = styled.span`
  width: 80px;
  height: 80px;
  border: 5px solid ${Color.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export { StyledSpinner, Loading };
