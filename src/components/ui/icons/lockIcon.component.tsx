import { FC, SVGAttributes } from 'react';

const LockIcon: FC<SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg {...props} width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='25' cy='25' r='25' fill='#F2F2F2' />
      <path
        d='M19.9236 22.5451C18.7795 22.5451 17.778 22.5451 16.9939 22.5451C16.2098 22.5451 16.2109 33.4219 16.9939 33.4219C17.7769 33.4219 31.6451 33.4219 32.4236 33.4219C33.2021 33.4219 33.2021 22.5451 32.4236 22.5451C31.6451 22.5451 29.4939 22.5451 29.4939 22.5451M19.9236 22.5451C19.9236 17.1066 19.9236 13.8437 24.6111 13.8438C29.2986 13.8438 29.4939 17.1066 29.4939 22.5451M19.9236 22.5451H29.4939'
        stroke='#8D8D8D'
        strokeWidth='1.5'
      />
    </svg>
  );
};

export default LockIcon;
