import { Button, Input, Modal, Title } from "componets";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, Route, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSignUpUser, useAppDispatch } from "store";
import { AuthValue } from "types";
import { FormLink, FormText, StyledSingIn } from "./styles";
import { Form, FormInner, InputGroup, Label } from "ui/base";

export const SignUpPage = () => {
  const { reset, control, handleSubmit } = useForm<AuthValue>();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthValue> = (data) => {
    dispatch(fetchSignUpUser(data))
      .unwrap()
      .then(() => toggleModal());
    reset();
  };
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    //navigate(ROUTE.HOME);
  };

  return (
    <StyledSingIn>
      <Title>Sign Up</Title>
      {/* <Form onSubmit={onSubmit} /> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        Already have an account? <FormLink to={ROUTE.BACK_SIGN_IN}>Sign In</FormLink>
      </FormText>

      {isOpen && <Modal handelClose={toggleModal} />}
    </StyledSingIn>
  );
};
