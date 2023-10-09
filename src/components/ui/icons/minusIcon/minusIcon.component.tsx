import { FC, SVGAttributes } from 'react';
import css from './minusIcon.module.css';

const MinusIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ stroke, ...props }) => {
  return (
    <svg
      className={css.minus}
      {...props}
      width='36'
      height='6'
      viewBox='0 0 36 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M3 2.6001H33' stroke={stroke} strokeWidth='3' strokeLinecap='round' />
    </svg>
  );
};

export default MinusIcon;
