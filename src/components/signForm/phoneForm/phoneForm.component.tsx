import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { useProfile } from '@hooks/useProfile.hook';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { phoneInputSetting } from './phoneForm.data';
import { IPhoneForm } from './phoneForm.interface';
import css from './phoneForm.module.css';
import { handleChange } from './phoneForm.validation';

const PhoneForm: FC<IPhoneForm> = ({ setPhone }) => {
  const { getUser } = useProfile();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<{ phoneNumber: string }>();
  const onSubmit: SubmitHandler<{ phoneNumber: string }> = async ({ phoneNumber }) => {
    const user = await getUser(phoneNumber);
    user && 'phone' in user ? setPhone(user.phone) : setPhone('');
  };
  return (
    <>
      <form id={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('phoneNumber', {
            ...phoneInputSetting,
            onChange: () => setValue('phoneNumber', handleChange(watch('phoneNumber')))
          })}
          placeholder='Phone number'
          type='tel'
        />
        <Button color='purple' icon={ArrowHeadIcon} />
      </form>
      <p>{errors.phoneNumber?.message}</p>
    </>
  );
};

export default PhoneForm;
