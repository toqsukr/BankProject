import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const TransactionIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg
      className={css.icon}
      {...props}
      width='35'
      height='23'
      viewBox='0 0 35 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.5 8.5H33.5C32.7 7.7 28.8333 3.83333 27 2M27.5 14.5H2L8.5 21'
        stroke='black'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default TransactionIcon;
