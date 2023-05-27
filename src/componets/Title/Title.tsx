import React, { ReactNode } from "react";
import { StyledTitle } from "./styles";

interface TitleProps {
  children: ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
