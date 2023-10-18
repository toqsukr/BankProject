import { FC } from 'react';
import css from './Auth.module.css';

const Auth: FC = () => {
  return (
    <section id={css.authSection}>
      <div id={css.innerContainer}>Вход</div>
    </section>
  );
};

export default Auth;
