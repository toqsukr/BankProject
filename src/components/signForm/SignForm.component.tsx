import { FC, useState } from 'react';
import css from './SignForm.module.css';
import LoginForm from './loginForm/loginForm.component';
import PhoneForm from './phoneForm/phoneForm.component';
import RegisterForm from './registerForm/registerForm.component';

const SignForm: FC = () => {
  const [phone, setPhone] = useState<string | null>(null);
  return (
    <section id={css.signSection}>
      {phone === null && <PhoneForm setPhone={setPhone} />}
      {!!phone && phone !== '' && <LoginForm phone={phone} />}
      {phone === '' && <RegisterForm />}
    </section>
  );
};

export default SignForm;
