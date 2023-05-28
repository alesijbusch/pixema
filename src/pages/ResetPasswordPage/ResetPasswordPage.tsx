import { Button, Input, Title } from "componets";
import { sendPasswordResetEmail } from "firebase/auth";
import { StyledSing } from "pages/SignUpPage/styles";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "services";
import { useAppDispatch } from "store";
import { AuthValue } from "types";
import { Form, FormInner, InputGroup, Label } from "ui/base";

export const ResetPasswordPage = () => {
  const { reset, control, handleSubmit } = useForm<AuthValue>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitReset: SubmitHandler<AuthValue> = ({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("reset");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <StyledSing>
      <Title>Reset password</Title>
      <Form onSubmit={handleSubmit(onSubmitReset)}>
        <FormInner>
          <InputGroup>
            <Label htmlFor="name">Email</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Your email" type="email" id="email" />
              )}
              name="email"
              defaultValue=""
            />
          </InputGroup>
        </FormInner>
        <Button>Reset</Button>
      </Form>
    </StyledSing>
  );
};
