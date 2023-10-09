import { FC, SVGAttributes } from 'react';

const ArrowHeadIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg {...props} width='8' height='13' viewBox='0 0 8 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7 7L7.35355 7.35355L7.70711 7L7.35355 6.64645L7 7ZM1.14645 12.1464C0.951184 12.3417 0.951184 12.6583 1.14645 12.8536C1.34171 13.0488 1.65829 13.0488 1.85355 12.8536L1.14645 12.1464ZM0.646447 1.35355L6.64645 7.35355L7.35355 6.64645L1.35355 0.646447L0.646447 1.35355ZM6.64645 6.64645L1.14645 12.1464L1.85355 12.8536L7.35355 7.35355L6.64645 6.64645Z'
        fill='#444444'
      />
    </svg>
  );
};

export default ArrowHeadIcon;
