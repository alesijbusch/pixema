import { Button, Input, Title } from "componets";
import { FormLink, FormLinkText, FormText, StyledSing } from "pages/SignUpPage/styles";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTE } from "routes";
import { fetchSignInUser, useAppDispatch } from "store";
import { AuthValue } from "types";

import { Form, FormInner, InputGroup, Label } from "ui/base";

export const SignInPage = () => {
  const { reset, control, handleSubmit } = useForm<AuthValue>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignIn: SubmitHandler<AuthValue> = (data) => {
    dispatch(fetchSignInUser(data))
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME);
      });
    // .then(() => toggleModal());
  };
  return (
    <StyledSing>
      <Title>Sign In</Title>
      {/* <Form onSubmit={onSubmit} /> */}
      <Form onSubmit={handleSubmit(onSubmitSignIn)}>
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
          <InputGroup>
            <Label htmlFor="name">Password</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Your password" type="password" id="password" />
              )}
              name="password"
              defaultValue=""
            />
          </InputGroup>
          <FormLinkText to={ROUTE.HOME + "/" + ROUTE.RESET_PASSWORD}>Forgot password?</FormLinkText>
        </FormInner>
        <Button>Sign in</Button>
      </Form>
      <FormText>
        Already have an account? <FormLink to={ROUTE.BACK_SIGN_UP}>Sign Up</FormLink>
      </FormText>
    </StyledSing>
  );
};
