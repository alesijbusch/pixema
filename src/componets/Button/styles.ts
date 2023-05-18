import styled from "styled-components";
import { tokens, typography } from "ui";

const { color } = tokens;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 10px;
  ${typography.S3}
  color: #fff;
  ${color.background.primary};
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  :hover {
    ${color.background.primaryLight};
  }
`;

export { StyledButton };
