import styled from "styled-components";
import { spaces, tokens } from "ui";

const { layout } = tokens;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  ${layout.media.smallTablet} {
    width: 528px;
  }
  ${layout.media.tablet} {
    width: 688px;
  }
  ${layout.media.largeTablet} {
    width: 928px;
  }
  ${layout.media.desktop} {
    width: 878px;
  }
  ${layout.media.largeDesktop} {
    width: 1490px;
  }
`;

const Form = styled.form``;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
const InputGroup = styled.div``;
const FormInner = styled.div`
  display: grid;
  margin-top: 40px;
  grid-gap: 24px;
  ${spaces.mb40}
`;
export { Content, Form, Label, InputGroup, FormInner };
