import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactNode;
}
export const Button = ({ children }: ButtonProps) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};
