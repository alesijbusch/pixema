import { Button, Input, Title } from "componets";
import { FormLink, FormText, StyledSingIn } from "pages/SignUpPage/styles";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Content } from "ui";
import { Form, FormInner, InputGroup, Label } from "ui/base";

export const SignInPage = () => {
  const { reset, control, handleSubmit } = useForm();
  return (
    <StyledSingIn>
      <Title>Sign In</Title>
      {/* <Form onSubmit={onSubmit} /> */}
      <Form>
        <FormInner>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Your name" type="text" id="name" />
              )}
              name="name"
              defaultValue=""
            />
          </InputGroup>
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
        </FormInner>
        <Button>Save</Button>
      </Form>
      <FormText>
        Already have an account? <FormLink to={ROUTE.BACK_SIGN_UP}>Sign Up</FormLink>
      </FormText>
    </StyledSingIn>
  );
};
