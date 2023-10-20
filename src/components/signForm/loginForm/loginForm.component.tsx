import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { useAuth } from '@hooks/useAuth.hook';
import { ILoginRequest } from '@services/auth/auth.interface';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { passwordInputSetting } from './loginForm.data';
import css from './loginForm.module.css';

const LoginForm: FC = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm<ILoginRequest>();
  const onSubmit: SubmitHandler<ILoginRequest> = async data => {
    const user = await login(data);
    console.log(user);
  };
  return (
    <form id={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('password', passwordInputSetting)} placeholder='Password' type='password' />
      <Button color='purple' icon={ArrowHeadIcon} />
    </form>
  );
};

export default LoginForm;
