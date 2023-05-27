import React, { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthValue } from "types";

// interface FormProps{
//   onSubmit: SubmitHandler<AuthValue>
// }

// export const Form = ({onSubmit}: FormProps) => {
//   const { register, handleSubmit } = useForm<AuthValue>();

//   return (
//     <StyledForm onSubmit={handleSubmit(onSubmit)}>
//       {/* <input type="text" {...register("email")} />
//       <input type="password" {...register("password")} />
//       <button type="submit">Submit</button> */}
//     </StyledForm>
//   );
// };

interface FormProps {
  onSubmit: any;
  children: ReactNode;
}

export const Form = ({ onSubmit, children }: FormProps) => {
  // const { register, handleSubmit } = useForm<AuthValue>();

  return (
    // <StyledForm onSubmit={onSubmit}>
    //   {/* <input type="text" {...register("email")} />
    //   <input type="password" {...register("password")} />
    //   <button type="submit">Submit</button> */}
    //   {children}
    // </StyledForm>
    <div></div>
  );
};
