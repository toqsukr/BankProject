import { HOST_URL } from '@constants/constants';
import axios from 'axios';
import { saveUserToStorage } from './auth.helper';
import { IAuthResponse, ILoginRequest } from './auth.interface';

export const AuthService = {
  async login(data: ILoginRequest) {
    const response = await axios.post<ILoginRequest, IAuthResponse>(`${HOST_URL}/auth/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.user) saveUserToStorage(response.user);
  }
};
