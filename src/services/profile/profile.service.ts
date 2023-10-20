import { HOST_URL } from '@constants/constants';
import axios, { AxiosResponse } from 'axios';
import { IUser } from '../auth/auth.interface';

export const ProfileService = {
  async getProfile(phoneNumber: string) {
    const response = await axios.post<string, AxiosResponse<IUser>>(
      `${HOST_URL}/user`,
      { phone: phoneNumber },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  }
};
