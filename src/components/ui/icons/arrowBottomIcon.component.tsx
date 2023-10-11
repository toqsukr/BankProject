import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const ArrowBottomIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ stroke, className, ...props }) => {
  return (
    <svg
      className={`${css.icon} ${className}`}
      {...props}
      width='24'
      height='37'
      viewBox='0 0 24 37'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 2L12 35M12 35L22 23M12 35L2 23'
        stroke={stroke}
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default ArrowBottomIcon;
