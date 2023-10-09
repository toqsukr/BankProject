import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const ArrowUpIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ stroke, className, ...props }) => {
  return (
    <svg
      className={`${css.icon} ${className}`}
      {...props}
      width='24'
      height='36'
      viewBox='0 0 24 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 34.5V1.5M12 1.5L2 13.5M12 1.5L22 13.5'
        stroke={stroke}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowUpIcon;
