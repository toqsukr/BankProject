import classNames from 'classnames';
import { FC } from 'react';
import { IButton } from './button.interface';
import css from './button.module.css';

const Button: FC<IButton> = ({ text, icon: Icon, color = 'white', ...props }) => {
  const buttonClasses = classNames({
    [css.buttonContainer]: true,
    [css.defaultButtonColor]: color === 'white',
    [css.purpleButtonColor]: color === 'purple',
    [css.pinkButtonColor]: color === 'pink'
  });

  const iconClasses = classNames({
    [css.defaultIconColor]: color === 'white',
    [css.purpleIconColor]: color === 'purple',
    [css.pinkIconColor]: color === 'pink'
  });
  return (
    <button {...props} className={buttonClasses}>
      <span>{text}</span>
      {Icon && <Icon className={iconClasses} />}
    </button>
  );
};

export default Button;
