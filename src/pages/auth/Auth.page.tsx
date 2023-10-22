import SignForm from '@components/signForm/SignForm.component';
import LogoIcon from '@components/ui/icons/logoIcon.component';
import { useAuthRedirect } from '@hooks/useAuthRedirect.hook';
import { FC } from 'react';
import css from './Auth.module.css';

const Auth: FC = () => {
  useAuthRedirect();
  return (
    <section id={css.authSection}>
      <div id={css.innerContainer}>
        <LogoIcon id={css.logo} />
        <div id={css.contentContainer}>
          <h1>Authorization</h1>
          <SignForm />
        </div>
      </div>
    </section>
  );
};

export default Auth;
