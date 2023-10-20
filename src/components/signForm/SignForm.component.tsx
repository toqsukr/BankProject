import { FC, useState } from 'react';
import css from './SignForm.module.css';
import LoginForm from './loginForm/loginForm.component';
import PhoneForm from './phoneForm/phoneForm.component';

const SignForm: FC = () => {
  const [phone, setPhone] = useState<string | null>(null);
  return (
    <section id={css.signSection}>
      {!!phone || <PhoneForm setPhone={setPhone} />}
      {phone !== null && <LoginForm />}
    </section>
  );
};

export default SignForm;
