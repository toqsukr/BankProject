import Message from '@components/ui/message/message.component';
import { MessageTypes } from '@components/ui/message/message.interface';
import { useAuth } from '@hooks/useAuth.hook';
import { FC, useState } from 'react';
import { UserStatus } from './SignForm.interface';
import css from './SignForm.module.css';
import LoginForm from './loginForm/loginForm.component';
import PhoneForm from './phoneForm/phoneForm.component';
import RegisterForm from './registerForm/registerForm.component';

const SignForm: FC = () => {
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const {
    state: { userNotFound }
  } = useAuth();
  return (
    <>
      {userNotFound && <Message text='Wrong password' type={MessageTypes.DANGER} />}
      <section id={css.signSection}>
        {!!!userStatus && <PhoneForm setUserStatus={setUserStatus} />}
        {userStatus?.status === 'registered' && <LoginForm phone={userStatus.phone} />}
        {userStatus?.status === 'unregistered' && <RegisterForm phone={userStatus.phone} />}
      </section>
    </>
  );
};

export default SignForm;
