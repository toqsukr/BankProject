import { IUser } from '@services/auth/auth.interface';

export interface IUserInitialState {
  user: IUser | null;
  isLoading: boolean;
  userNotFound: boolean;
  phoneExist: boolean;
}
