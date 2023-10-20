import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { useProfile } from '@hooks/useProfile.hook';
import { FC, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import css from './SignForm.module.css';

const SignForm: FC = () => {
  const { getUser } = useProfile();
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm<{ phoneNumber: string }>();
  const onSubmit: SubmitHandler<{ phoneNumber: string }> = async ({ phoneNumber }) => {
    const user = await getUser(phoneNumber);
    console.log(!!user && user);
  };

  return (
    <section id={css.signSection}>
      <form ref={formRef} id={css.form} onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('phoneNumber')} placeholder='Phone number' type='tel' />
        <Button color='purple' icon={ArrowHeadIcon} />
      </form>
    </section>
  );
};

export default SignForm;
