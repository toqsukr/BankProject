import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const SuccessIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
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
        d='M13.501 29C14.501 31 21.501 40 23.501 40C25.501 40 38.501 23.5 39.501 21.5C40.501 19.5 37.501 17 35.501 18.5C33.501 20 23.501 33 22.501 33C21.501 33 18.501 27 17.001 25.5C15.501 24 12.501 27 13.501 29Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 1C23.9991 1 1.00445 23.9995 1 26.5C0.994661 29.5 23.9966 53 26.5 53C29.0034 53 52.0481 29 52 26.5C51.9519 24 29.001 1 26.5 1ZM23.501 40C21.501 40 14.501 31 13.501 29C12.501 27 15.501 24 17.001 25.5C18.501 27 21.501 33 22.501 33C23.501 33 33.501 20 35.501 18.5C37.501 17 40.501 19.5 39.501 21.5C38.501 23.5 25.501 40 23.501 40Z'
        fill='#35D39D'
        fillOpacity='0.5'
      />
      <path
        d='M13.501 29C14.501 31 21.501 40 23.501 40C25.501 40 38.501 23.5 39.501 21.5C40.501 19.5 37.501 17 35.501 18.5C33.501 20 23.501 33 22.501 33C21.501 33 18.501 27 17.001 25.5C15.501 24 12.501 27 13.501 29Z'
        stroke='#1CCD91'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 1C23.9991 1 1.00445 23.9995 1 26.5C0.994661 29.5 23.9966 53 26.5 53C29.0034 53 52.0481 29 52 26.5C51.9519 24 29.001 1 26.5 1ZM23.501 40C21.501 40 14.501 31 13.501 29C12.501 27 15.501 24 17.001 25.5C18.501 27 21.501 33 22.501 33C23.501 33 33.501 20 35.501 18.5C37.501 17 40.501 19.5 39.501 21.5C38.501 23.5 25.501 40 23.501 40Z'
        stroke='#1CCD91'
      />
    </svg>
  );
};

export default SuccessIcon;
