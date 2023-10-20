import { FC, useEffect, useState } from 'react';
import css from './SignForm.module.css';
import LoginForm from './loginForm/loginForm.component';
import PhoneForm from './phoneForm/phoneForm.component';

const SignForm: FC = () => {
  const [phone, setPhone] = useState<string | null>(null);
  useEffect(() => console.log(phone));
  return (
    <section id={css.signSection}>
      {phone === null && <PhoneForm setPhone={setPhone} />}
      {!!phone && phone !== '' && <LoginForm />}
    </section>
  );
};

export default SignForm;
