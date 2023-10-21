import { Dispatch, SetStateAction } from 'react';
import { UserStatus } from '../SignForm.interface';

export interface IPhoneForm {
  setUserStatus: Dispatch<SetStateAction<UserStatus | null>>;
}
