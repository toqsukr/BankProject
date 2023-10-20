import { Dispatch, SetStateAction } from 'react';

export interface IPhoneForm {
  setPhone: Dispatch<SetStateAction<string | null>>;
}
