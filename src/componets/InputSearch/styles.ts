import styled from 'styled-components';

import { Color, tokens } from 'ui';

const { color, size } = tokens;
const StyledInputSearch = styled.input`
  width: 100%;
  padding: 16px 40px 16px 20px;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-weight: 500px;
  outline: 2px solid ${Color.graphite};
  ${size.font.fs16};
  ${size.fontWeight.medium};
  ${size.lineHeight.lh24};
  ${color.text.white};
  ${color.background.graphite};

  ::placeholder {
    ${color.text.secondary};
  }
  :focus {
    outline: 2px solid ${Color.primary};
  }
  :disabled {
    ${color.background.secondary};
    ${color.text.light};
  }
`;

export { StyledInputSearch };
