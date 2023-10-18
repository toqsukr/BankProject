import Button from '@components/ui/button/button.component';
import { FC } from 'react';
import css from './SignForm.module.css';

const SignForm: FC = () => {
  return (
    <section id={css.signSection}>
      <form id={css.form} action=''>
        <input type='text' />
        <input type='text' />
        <Button color='purple' text='Log in' />
      </form>
      <div id={css.buttonContainer}>
        <a href='#'>No account? Sign up</a>
        <a href='#'>Forgot password</a>
      </div>
    </section>
  );
};

export default SignForm;
