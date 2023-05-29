import React, { useEffect } from "react";
import { CopyText, FormTemplateInner, LogoWrap, StyledFormTemplate } from "./styles";
import { Outlet } from "react-router-dom";
import { Logo } from "componets";
import { selectTheme, useAppSelector } from "store";

export const FormTemplate = () => {
  const { modeTheme } = useAppSelector(selectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", modeTheme);
  }, [modeTheme]);
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
