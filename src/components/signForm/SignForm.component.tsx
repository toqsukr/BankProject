import Button from '@components/ui/button/button.component';
import { FC } from 'react';
import css from './SignForm.module.css';

const SignForm: FC = () => {
  return (
    <section id={css.signSection}>
      <form id={css.form} action=''>
        <input type='text' />
        <input type='text' />
      </form>
      <div id={css.buttonContainer}>
        <Button color='purple' text='Log in' />
        <Button color='purple' text='Sign up' />
        <a href=''>Forgot password</a>
      </div>
    </section>
  );
};

export default SignForm;
