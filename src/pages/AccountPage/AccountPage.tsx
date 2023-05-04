import { Input } from 'componets';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Content } from 'ui';
import {
  AccountForm,
  AccountFormBlock,
  AccountFormGroup,
  AccountFormInner,
  AccountFormTitle,
  ButtonGroup,
  Label,
} from './styles';
import { Button } from 'componets/Button/Button';

interface Profile {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const AccountPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    //formState: { errors },
  } = useForm<Profile>({});
  const onSubmit: SubmitHandler<Profile> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Content>
      <AccountForm onSubmit={handleSubmit(onSubmit)}>
        <AccountFormTitle>Profile</AccountFormTitle>
        <AccountFormBlock>
          <AccountFormInner>
            <Label htmlFor="name">Name</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Your name"
                  type="text"
                  id="name"
                />
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
                <Input
                  {...field}
                  placeholder="Your email"
                  type="email"
                  id="email"
                />
              )}
              name="email"
              defaultValue=""
            />
          </AccountFormInner>
        </AccountFormBlock>

        <AccountFormBlock>
          <AccountFormInner>
            <Label htmlFor="password">Password</Label>
            <Controller
              control={control}
              // rules={getValidateRule("text")}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Your password"
                  type="password"
                  id="password"
                />
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
                  <Input
                    {...field}
                    placeholder="New password"
                    type="password"
                    id="newPassword"
                  />
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
        <ButtonGroup>
          <Button name="Save" />
          <Button name="Cancel" />
        </ButtonGroup>
      </AccountForm>
    </Content>
  );
};
