import { FC, PropsWithChildren } from 'react';
import { IButton } from './button.interface';
import css from './button.module.css';

const Button: FC<PropsWithChildren<IButton>> = ({ text, children, ...props }) => {
  return (
    <div {...props} className={css.buttonContainer}>
      <span>{text}</span>
      {children}
    </div>
  );
};

export default Button;
