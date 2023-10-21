import { IUser } from '@services/auth/auth.interface';

export interface IInitialState {
  user: IUser | null;
  isLoading: boolean;
  userNotFound: boolean;
  phoneExist: boolean;
}
