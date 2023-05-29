import { Input, Title } from "componets";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Content } from "ui";
import {
  AccountForm,
  AccountFormBlock,
  AccountFormGroup,
  AccountFormInner,
  ButtonGroup,
  Label,
  Switch,
  SwitchRound,
  SwitchInput,
  SwitchContainer,
  SwitchName,
  SwitchText,
  SwitchInner,
} from "./styles";
import { Button } from "componets/Button/Button";
import { setThemeMode, useAppDispatch } from "store";

interface Profile {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const AccountPage = () => {
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    dispatch(setThemeMode());
  };
  const {
    handleSubmit,
    control,
    reset,
    //formState: { errors },
  } = useForm<Profile>({});
  const onSubmit: SubmitHandler<Profile> = (data) => {
    reset();
  };

  return (
    <Content>
      <AccountForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Profile</Title>
        <AccountFormBlock>
          <AccountFormInner>
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
          </AccountFormInner>
          <AccountFormInner>
            <Label htmlFor="email">Email</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Your email" type="email" id="email" />
              )}
              name="email"
              defaultValue=""
            />
          </AccountFormInner>
        </AccountFormBlock>
        <Title>Password</Title>
        <AccountFormBlock>
          <AccountFormInner>
            <Label htmlFor="password">Password</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input {...field} placeholder="Your password" type="password" id="password" />
              )}
              name="password"
              defaultValue=""
            />
          </AccountFormInner>
          <AccountFormGroup>
            <AccountFormInner>
              <Label htmlFor="newPassword">New password</Label>
              <Controller
                control={control}
                // rules={getValidateRule("text")}
                render={({ field }) => (
                  <Input {...field} placeholder="New password" type="password" id="newPassword" />
                )}
                name="newPassword"
                defaultValue=""
              />
            </AccountFormInner>
            <AccountFormInner>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Controller
                control={control}
                // rules={getValidateRule("text")}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Confirm password"
                    type="password"
                    id="confirmPassword"
                  />
                )}
                name="confirmPassword"
                defaultValue=""
              />
            </AccountFormInner>
          </AccountFormGroup>
        </AccountFormBlock>
        <Title>Color mode</Title>

        <SwitchContainer>
          <SwitchInner>
            <SwitchName>Dark</SwitchName>
            <SwitchText>Use dark thema</SwitchText>
          </SwitchInner>
          <Switch className="switch">
            <SwitchInput type="checkbox" onClick={toggleTheme} />
            <SwitchRound></SwitchRound>
          </Switch>
        </SwitchContainer>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </AccountForm>
    </Content>
  );
};
