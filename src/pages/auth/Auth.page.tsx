import SignForm from '@components/signForm/SignForm.component';
import { FC } from 'react';
import css from './Auth.module.css';

const Auth: FC = () => {
  return (
    <section id={css.authSection}>
      <div id={css.innerContainer}>
        <SignForm />
      </div>
    </section>
  );
};

export default Auth;
