import { FC, SVGAttributes } from 'react';

export interface IButton {
  text: string;
  color: 'white' | 'purple' | 'pink';
  icon?: FC<SVGAttributes<HTMLOrSVGElement>>;
}
