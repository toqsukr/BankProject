import Button from '@components/ui/button/button.component';
import Input from '@components/ui/input/input.component';
import { useAuth } from '@hooks/useAuth.hook';
import { IRegisterRequest } from '@services/auth/auth.interface';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { passwordInputSetting } from '../SignForm.data';
import { dateInputSetting, nameInputSetting, surnameInputSetting } from './registerForm.data';
import { IRegisterForm } from './registerForm.interface';
import css from './registerForm.module.css';
import { handleDateChange, handleNameChange } from './registerForm.validation';

const RegisterForm: FC<IRegisterForm> = ({ phone }) => {
  const {
    actions: { register }
  } = useAuth();
  const {
    register: formSubmit,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<Omit<IRegisterRequest, 'phone'>>();
  const onSubmit: SubmitHandler<Omit<IRegisterRequest, 'phone'>> = async data => {
    register({ ...data, phone });
  };
  return (
    <form id={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...formSubmit('name', {
          ...nameInputSetting,
          onChange: () => setValue('name', handleNameChange(watch('name')))
        })}
        placeholder='Name'
        type='text'
      />
      <p>{errors.name?.message}</p>
      <Input
        {...formSubmit('surname', {
          ...surnameInputSetting,
          onChange: () => setValue('surname', handleNameChange(watch('surname')))
        })}
        placeholder='Surname'
        type='text'
      />
      <p>{errors.surname?.message}</p>
      <Input
        {...formSubmit('dateOfBirth', {
          ...dateInputSetting,
          onChange: () => setValue('dateOfBirth', handleDateChange(watch('dateOfBirth')))
        })}
        placeholder='Birthdate'
        type='tel'
      />
      <p>{errors.dateOfBirth?.message}</p>
      <Input {...formSubmit('password', passwordInputSetting)} placeholder='Password' type='password' />
      <p>{errors.password?.message}</p>
      <Button color='purple' text='Submit' />
    </form>
  );
};

export default RegisterForm;
