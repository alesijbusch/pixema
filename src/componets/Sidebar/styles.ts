import styled from "styled-components";
import { tokens, typography } from "ui";

const { color, layout } = tokens;

const StyledSidebar = styled.div`
  ${layout.media.desktop} {
    width: 306px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  display: none;
`;
const Copy = styled.div`
  ${color.text.light};
  ${typography.B1}
`;

export { StyledSidebar, Copy };
