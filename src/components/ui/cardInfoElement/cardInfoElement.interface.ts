import { FC, SVGAttributes } from 'react';

export interface ICardInfoElement {
  title: string;
  icon?: FC<SVGAttributes<HTMLOrSVGElement>>;
}
