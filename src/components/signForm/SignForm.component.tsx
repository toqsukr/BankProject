import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { useProfile } from '@hooks/useProfile.hook';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { phoneInputSetting } from './SignForm.data';
import css from './SignForm.module.css';
import { handleChange } from './SignForm.validation';

const SignForm: FC = () => {
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
    console.log(user);
  };

  return (
    <section id={css.signSection}>
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
    </section>
  );
};

export default SignForm;
