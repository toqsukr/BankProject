import { InputHTMLAttributes, forwardRef } from 'react';
import css from './input.module.css';

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...props }, ref) => {
  return <input className={css.input} ref={ref} {...props} />;
});

export default Input;
