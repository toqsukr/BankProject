export interface IAuthResponse {
  user: Omit<IRegisterRequest, 'password'>;
  accessToken: string;
}

export interface ILoginRequest {
  phone: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  name: string;
  surname: string;
  dateOfBirth: string;
}

export interface IUser extends Omit<IRegisterRequest, 'password'> {
  balance: number;
}
