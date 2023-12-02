import { FC, SVGAttributes } from 'react';
import css from './icon.module.css';

const InfoIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
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
        d='M26.4951 42C22.4951 42 22.9951 33 22.9951 31.5C22.9951 30 23.005 21 26.5 21C29.9951 21 29.9951 30 29.9951 31.5C29.9951 33 30.4951 42 26.4951 42Z'
        fill='white'
      />
      <path
        d='M26.5 10C24.5657 9.99729 22.9951 11.5656 22.9951 13.5C22.9951 15.433 24.5621 17 26.4951 17C28.4281 17 29.9951 15.433 29.9951 13.5C29.9951 11.5684 28.4317 10.0027 26.5 10Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 1C23.9951 1 1.03696 24 1.00005 26.5C0.963135 29 24.0138 53 26.5 53C28.9863 53 51.9863 29 52 26.5C52.0138 24 28.9951 1 26.5 1ZM22.9951 13.5C22.9951 11.5656 24.5657 9.99729 26.5 10C28.4317 10.0027 29.9951 11.5684 29.9951 13.5C29.9951 15.433 28.4281 17 26.4951 17C24.5621 17 22.9951 15.433 22.9951 13.5ZM22.9951 31.5C22.9951 33 22.4951 42 26.4951 42C30.4951 42 29.9951 33 29.9951 31.5C29.9951 30 29.9951 21 26.5 21C23.005 21 22.9951 30 22.9951 31.5Z'
        fill='#00D0EA'
        fillOpacity='0.5'
      />
      <path
        d='M26.4951 42C22.4951 42 22.9951 33 22.9951 31.5C22.9951 30 23.005 21 26.5 21C29.9951 21 29.9951 30 29.9951 31.5C29.9951 33 30.4951 42 26.4951 42Z'
        stroke='#00CAE7'
      />
      <path
        d='M26.5 10C24.5657 9.99729 22.9951 11.5656 22.9951 13.5C22.9951 15.433 24.5621 17 26.4951 17C28.4281 17 29.9951 15.433 29.9951 13.5C29.9951 11.5684 28.4317 10.0027 26.5 10Z'
        stroke='#00CAE7'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.5 1C23.9951 1 1.03696 24 1.00005 26.5C0.963135 29 24.0138 53 26.5 53C28.9863 53 51.9863 29 52 26.5C52.0138 24 28.9951 1 26.5 1ZM22.9951 13.5C22.9951 11.5656 24.5657 9.99729 26.5 10C28.4317 10.0027 29.9951 11.5684 29.9951 13.5C29.9951 15.433 28.4281 17 26.4951 17C24.5621 17 22.9951 15.433 22.9951 13.5ZM22.9951 31.5C22.9951 33 22.4951 42 26.4951 42C30.4951 42 29.9951 33 29.9951 31.5C29.9951 30 29.9951 21 26.5 21C23.005 21 22.9951 30 22.9951 31.5Z'
        stroke='#00CAE7'
      />
    </svg>
  );
};

export default InfoIcon;