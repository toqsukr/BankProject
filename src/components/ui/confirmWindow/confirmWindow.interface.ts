import { IShow } from '@interfaces/component.interface';
import { MouseEventHandler } from 'react';

export interface IConfirm extends IShow {
  title: string;
  text: string;
  action: MouseEventHandler<HTMLButtonElement>;
}
