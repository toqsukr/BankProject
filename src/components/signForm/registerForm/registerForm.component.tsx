import Button from '@components/ui/button/button.component';
import Input from '@components/ui/input/input.component';
import { useAuth } from '@hooks/useAuth.hook';
import { IRegisterRequest } from '@services/auth/auth.interface';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { passwordInputSetting } from '../SignForm.data';
import { dateInputSetting, nameInputSetting, surnameInputSetting } from './registerForm.data';
import css from './registerForm.module.css';

const RegisterForm: FC = () => {
  const { register } = useAuth();
  const {
    register: formSubmit,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<IRegisterRequest>();
  const onSubmit: SubmitHandler<IRegisterRequest> = async data => {
    await register(data);
  };
  return (
    <form id={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input {...formSubmit('name', nameInputSetting)} placeholder='Name' type='text' />
      <Input {...formSubmit('surname', surnameInputSetting)} placeholder='Surname' type='text' />
      <Input {...formSubmit('dateOfBirth', dateInputSetting)} placeholder='Birthdate' type='tel' />
      <Input {...formSubmit('password', passwordInputSetting)} placeholder='Password' type='password' />
      <Button color='purple' text='Submit' />
    </form>
  );
};

export default RegisterForm;
