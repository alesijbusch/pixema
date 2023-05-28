import { Button, Input, Modal, Title } from "componets";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, Route, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchSignUpUser, useAppDispatch } from "store";
import { AuthValue } from "types";
import { FormLink, FormText, StyledSingIn } from "./styles";
import { Form, FormInner, InputGroup, Label } from "ui/base";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignUpPage = () => {
  const { reset, control, handleSubmit } = useForm<AuthValue>();
  //const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitSignUp: SubmitHandler<AuthValue> = (data) => {
    dispatch(fetchSignUpUser(data))
      .unwrap()
      .then(() => {
        // toast.success("user is logged");
        navigate(ROUTE.HOME);
      });
    // .then(() => toggleModal());
  };
  // const toggleModal = () => {
  //   setIsOpen((prev) => !prev);
  //   //navigate(ROUTE.HOME);
  // };

  return (
    <StyledSingIn>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onSubmitSignUp)}>
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
          {/* <InputGroup>
            <Label htmlFor="name">Confirm password</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Confirm  password" type="password" id="cPassword" />
              )}
              name="cPassword"
              defaultValue=""
            />
          </InputGroup> */}
        </FormInner>
        <Button>Save</Button>
      </Form>
      <FormText>
        Already have an account? <FormLink to={ROUTE.BACK_SIGN_IN}>Sign In</FormLink>
      </FormText>
      <ToastContainer />
      {/* {isOpen && <Modal handelClose={toggleModal} />} */}
    </StyledSingIn>
  );
};
