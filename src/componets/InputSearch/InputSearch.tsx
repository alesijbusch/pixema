import React, { InputHTMLAttributes } from "react";
import { StyledInputSearch } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputSearch = (props: InputProps) => {
  return <StyledInputSearch {...props} />;
};
