import Button from '@components/ui/button/button.component';
import ArrowHeadIcon from '@components/ui/icons/arrowHeadIcon.component';
import Input from '@components/ui/input/input.component';
import { FC } from 'react';
import css from './SignForm.module.css';

const SignForm: FC = () => {
  return (
    <section id={css.signSection}>
      <form id={css.form} action=''>
        <Input placeholder='Phone number' type='tel' />
        <Button color='purple' icon={ArrowHeadIcon} />
      </form>
    </section>
  );
};

export default SignForm;
