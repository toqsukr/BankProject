import { FC, HTMLAttributes, SVGAttributes } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  text?: string;
  color: 'white' | 'purple' | 'pink';
  icon?: FC<SVGAttributes<HTMLOrSVGElement>>;
}
