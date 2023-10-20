import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { useAuth } from '@hooks/useAuth.hook';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { passwordInputSetting } from '../SignForm.data';
import { ILoginForm } from './loginForm.interface';
import css from './loginForm.module.css';

const LoginForm: FC<ILoginForm> = ({ phone }) => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ password: string }>();
  const onSubmit: SubmitHandler<{ password: string }> = async ({ password }) => {
    if (!!!phone) return;
    const user = await login({ phone, password });
    console.log(user);
  };
  return (
    <form id={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('password', passwordInputSetting)} placeholder='Password' type='password' />
      <Button color='purple' icon={ArrowHeadIcon} />
      <p>{errors.password?.message}</p>
    </form>
  );
};

export default LoginForm;
