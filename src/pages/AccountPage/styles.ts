import styled from 'styled-components';
import { spaces, tokens, typography } from 'ui';

const { color, layout } = tokens;

const AccountForm = styled.form`
  ${layout.media.largeDesktop} {
    width: 1186px;
  }
`;
const AccountFormTitle = styled.h2`
  ${typography.H2};
  margin-bottom: 18px;
  ${layout.media.tablet} {
    margin-bottom: 16px;
  }
`;
const AccountFormBlock = styled.div`
  display: grid;
  grid-gap: 20px;
  ${color.background.dark};
  border-radius: 10px;
  padding: 24px;
  ${spaces.mb40};
  ${layout.media.tablet} {
    padding: 40px;
    grid-gap: 24px;
    grid-template-columns: repeat(2, auto);
  }
`;
const AccountFormInner = styled.div``;
const Label = styled.label`
  display: block;
  ${spaces.mb24};
`;
const AccountFormGroup = styled.div`
  display: grid;
  grid-gap: 20px;
  ${layout.media.tablet} {
    grid-gap: 24px;
  }
`;
const ButtonGroup = styled.div`
  margin-top: 40px;
  display: grid;
  grid-gap: 16px;
  ${layout.media.tablet} {
    margin-top: 48px;
    grid-gap: 33px;
    grid-template-columns: repeat(2, auto);
  }
  ${layout.media.desktop} {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 266px);
    justify-content: end;
  }
`;
export {
  AccountForm,
  AccountFormTitle,
  AccountFormBlock,
  AccountFormInner,
  AccountFormGroup,
  Label,
  ButtonGroup,
};
