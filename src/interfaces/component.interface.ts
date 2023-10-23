import { Dispatch, SetStateAction } from 'react';

export interface IShow {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export interface TypeOut extends IShow {
  ref: any;
}
