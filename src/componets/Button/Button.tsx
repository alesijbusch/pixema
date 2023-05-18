import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  name: string;
}
export const Button = ({ name }: ButtonProps) => {
  return <StyledButton type="submit">{name}</StyledButton>;
};
