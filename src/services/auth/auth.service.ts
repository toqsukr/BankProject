import { HOST_URL } from '@constants/constants';
import axios, { AxiosResponse } from 'axios';
import { saveTokenToStorage, saveUserToStorage } from './auth.helper';
import { IAuthResponse, ILoginRequest, IRegisterRequest } from './auth.interface';

export const AuthService = {
  async login(data: ILoginRequest) {
    const response = await axios.post<{ data: ILoginRequest }, AxiosResponse<IAuthResponse, IAuthResponse>>(
      `${HOST_URL}/auth/login`,
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (response.data.user) saveUserToStorage(response.data.user);
    if (response.data.accessToken) saveTokenToStorage(response.data.accessToken);
    return response.data;
  },

  async register(data: IRegisterRequest) {
    const response = await axios.post<
      { data: IRegisterRequest },
      AxiosResponse<IAuthResponse, IAuthResponse>
    >(`${HOST_URL}/auth/register`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.data.user) saveUserToStorage(response.data.user);
    if (response.data.accessToken) saveTokenToStorage(response.data.accessToken);
    return response.data;
  }
};
