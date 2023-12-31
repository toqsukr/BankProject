import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const WarningIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg
      className={css.icon}
      {...props}
      width='53'
      height='54'
      viewBox='0 0 53 54'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26.4951 12C22.4951 12 22.9951 21 22.9951 22.5C22.9951 24 23.0049 33 26.5 33C29.9951 33 29.9951 24 29.9951 22.5C29.9951 21 30.4951 12 26.4951 12Z'
        fill='white'
      />
      <path
        d='M26.5 44C24.5656 44.0027 22.9951 42.4344 22.9951 40.5C22.9951 38.567 24.5621 37 26.4951 37C28.4281 37 29.9951 38.567 29.9951 40.5C29.9951 42.4316 28.4316 43.9973 26.5 44Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 53C24 53 1 30 1 27.5C1 25 24 1 26.5 1C29 1 52 25 52 27.5C52 30 29 53 26.5 53ZM22.9951 40.5C22.9951 42.4344 24.5656 44.0027 26.5 44C28.4316 43.9973 29.9951 42.4316 29.9951 40.5C29.9951 38.567 28.4281 37 26.4951 37C24.5621 37 22.9951 38.567 22.9951 40.5ZM22.9951 22.5C22.9951 21 22.4951 12 26.4951 12C30.4951 12 29.9951 21 29.9951 22.5C29.9951 24 29.9951 33 26.5 33C23.0049 33 22.9951 24 22.9951 22.5Z'
        fill='#FFC12E'
        fillOpacity='0.5'
      />
      <path
        d='M26.4951 12C22.4951 12 22.9951 21 22.9951 22.5C22.9951 24 23.0049 33 26.5 33C29.9951 33 29.9951 24 29.9951 22.5C29.9951 21 30.4951 12 26.4951 12Z'
        stroke='#FFBD20'
      />
      <path
        d='M26.5 44C24.5656 44.0027 22.9951 42.4344 22.9951 40.5C22.9951 38.567 24.5621 37 26.4951 37C28.4281 37 29.9951 38.567 29.9951 40.5C29.9951 42.4316 28.4316 43.9973 26.5 44Z'
        stroke='#FFBD20'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 53C24 53 1 30 1 27.5C1 25 24 1 26.5 1C29 1 52 25 52 27.5C52 30 29 53 26.5 53ZM22.9951 40.5C22.9951 42.4344 24.5656 44.0027 26.5 44C28.4316 43.9973 29.9951 42.4316 29.9951 40.5C29.9951 38.567 28.4281 37 26.4951 37C24.5621 37 22.9951 38.567 22.9951 40.5ZM22.9951 22.5C22.9951 21 22.4951 12 26.4951 12C30.4951 12 29.9951 21 29.9951 22.5C29.9951 24 29.9951 33 26.5 33C23.0049 33 22.9951 24 22.9951 22.5Z'
        stroke='#FFBD20'
      />
    </svg>
  );
};

export default WarningIcon;
