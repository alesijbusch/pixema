import React, { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});
