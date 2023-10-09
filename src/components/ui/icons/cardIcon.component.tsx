import { FC, SVGAttributes } from 'react';

const CardIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg {...props} width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='25' cy='25' r='25' fill='#F2F2F2' />
      <path
        d='M16.2695 22.1227C16.2695 22.1227 16.2716 17.7574 16.6677 17.3608C17.0639 16.9643 33.1351 16.9645 33.5328 17.3608C33.9305 17.7572 33.9279 22.1227 33.9279 22.1227M16.2695 22.1227C16.2695 22.1227 16.2726 32.4397 16.6677 32.837C17.0629 33.2343 33.1376 33.4318 33.5328 32.837C33.9279 32.2422 33.9279 22.1227 33.9279 22.1227M16.2695 22.1227H33.9279M18.8503 25.6941H22.8185'
        stroke='#8D8D8D'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default CardIcon;
