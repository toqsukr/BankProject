import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const PlusIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ stroke, className, ...props }) => {
  return (
    <svg
      className={`${css.icon} ${className}`}
      {...props}
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M18 3V33M3 18.6H33' stroke={stroke} strokeWidth='3' strokeLinecap='round' />
    </svg>
  );
};

export default PlusIcon;
