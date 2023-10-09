import { FC, SVGAttributes } from 'react';

const PinIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg {...props} width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='25' cy='25' r='25' fill='#F2F2F2' />
      <path
        d='M16.2573 23.8703C15.5631 24.572 15.5631 25.7098 16.2573 26.4115C16.9516 27.1132 18.0771 27.1132 18.7713 26.4115C19.4655 25.7098 19.4655 24.572 18.7713 23.8703C18.0771 23.1686 16.9516 23.1686 16.2573 23.8703Z'
        fill='#585858'
      />
      <path
        d='M23.2406 23.8703C22.5464 24.572 22.5464 25.7098 23.2406 26.4115C23.9348 27.1132 25.0604 27.1132 25.7546 26.4115C26.4488 25.7098 26.4488 24.572 25.7546 23.8703C25.0604 23.1686 23.9348 23.1686 23.2406 23.8703Z'
        fill='#585858'
      />
      <path
        d='M30.2239 23.8703C29.5296 24.572 29.5296 25.7098 30.2239 26.4115C30.9181 27.1132 32.0436 27.1132 32.7378 26.4115C33.432 25.7098 33.432 24.572 32.7378 23.8703C32.0436 23.1686 30.9181 23.1686 30.2239 23.8703Z'
        fill='#585858'
      />
      <path
        d='M16.2573 23.8703C15.5631 24.572 15.5631 25.7098 16.2573 26.4115C16.9516 27.1132 18.0771 27.1132 18.7713 26.4115C19.4655 25.7098 19.4655 24.572 18.7713 23.8703C18.0771 23.1686 16.9516 23.1686 16.2573 23.8703Z'
        stroke='#8D8D8D'
        strokeWidth='1.5'
      />
      <path
        d='M23.2406 23.8703C22.5464 24.572 22.5464 25.7098 23.2406 26.4115C23.9348 27.1132 25.0604 27.1132 25.7546 26.4115C26.4488 25.7098 26.4488 24.572 25.7546 23.8703C25.0604 23.1686 23.9348 23.1686 23.2406 23.8703Z'
        stroke='#8D8D8D'
        strokeWidth='1.5'
      />
      <path
        d='M30.2239 23.8703C29.5296 24.572 29.5296 25.7098 30.2239 26.4115C30.9181 27.1132 32.0436 27.1132 32.7378 26.4115C33.432 25.7098 33.432 24.572 32.7378 23.8703C32.0436 23.1686 30.9181 23.1686 30.2239 23.8703Z'
        stroke='#8D8D8D'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default PinIcon;
