import styled from "styled-components";
import { spaces, tokens } from "ui";

const { color, layout } = tokens;

const AccountForm = styled.form`
  ${layout.media.largeDesktop} {
    width: 1186px;
  }
`;

const AccountFormBlock = styled.div`
  display: grid;
  grid-gap: 20px;
  ${color.themeBackground.blockBg};
  border-radius: 10px;
  padding: 24px;
  ${spaces.mb40};
  margin-top: 18px;
  ${layout.media.tablet} {
    margin-top: 16px;
    padding: 40px;
    grid-gap: 24px;
    grid-template-columns: repeat(2, auto);
  }
`;
const AccountFormInner = styled.div``;
const Label = styled.label`
  display: block;
  ${spaces.mb24};
  ${color.text.white};
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
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
`;
const SwitchRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${color.background.primary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 10px;
  :before {
    position: absolute;
    content: "";
    height: 18px;
    width: 16px;
    left: 2px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const SwitchInput = styled.input`
  outline: none;
  :focus + ${SwitchRound} {
    box-shadow: 0 0 1px #2196f3;
  }
  :checked + ${SwitchRound}:before {
    transform: translateX(13px);
  }
`;
const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${color.themeBackground.blockBg};
  border-radius: 10px;
  padding: 24px;
  ${spaces.mb40};
  margin-top: 18px;
  ${layout.media.tablet} {
    margin-top: 16px;
    padding: 40px;
    grid-gap: 24px;
    grid-template-columns: repeat(2, auto);
  }
`;
const SwitchInner = styled.div``;
const SwitchName = styled.span`
  display: block;
  margin-bottom: 10px;
  ${color.text.white};
`;
const SwitchText = styled.span`
  color: ${color.themeBackground.fill_bg};
`;

export {
  AccountForm,
  AccountFormBlock,
  AccountFormInner,
  AccountFormGroup,
  Label,
  ButtonGroup,
  Switch,
  SwitchInput,
  SwitchRound,
  SwitchContainer,
  SwitchInner,
  SwitchName,
  SwitchText,
};
