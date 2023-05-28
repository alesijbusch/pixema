import React from "react";
import {
  NotFoundLogo,
  NotFoundSub,
  NotFoundText,
  NotFoundWrap,
  StyledNotFoundPage,
} from "./styles";
import { Logo } from "componets";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <NotFoundLogo>
        <Logo />
      </NotFoundLogo>
      <NotFoundWrap>404</NotFoundWrap>
      <NotFoundText>Not Found</NotFoundText>
      <NotFoundSub>The page you are looking for can't be found.</NotFoundSub>
    </StyledNotFoundPage>
  );
};
