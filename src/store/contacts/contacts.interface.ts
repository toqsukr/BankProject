import { IUser } from '@services/auth/auth.interface';

export type IContact = Omit<IUser, 'dateOfBirth' | 'phone' | 'balance'>;

export interface IContactInitialState {
  contacts: IContact[];
  isLoading: boolean;
}
