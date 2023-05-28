import React from "react";
import { CopyText, FormTemplateInner, LogoWrap, StyledFormTemplate } from "./styles";
import { Outlet } from "react-router-dom";
import { Logo } from "componets";

export const FormTemplate = () => {
  return (
    <StyledFormTemplate>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <FormTemplateInner>
        <Outlet />
      </FormTemplateInner>

      <CopyText>© All Rights Reserved</CopyText>
    </StyledFormTemplate>
  );
};
