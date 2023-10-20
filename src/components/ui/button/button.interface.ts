import { FC, HTMLAttributes, SVGAttributes } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  color: 'white' | 'purple' | 'pink';
  icon?: FC<SVGAttributes<HTMLOrSVGElement>>;
}
