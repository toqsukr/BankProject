import { HOST_URL } from '@constants/constants';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { IUser } from '../auth/auth.interface';

export const ProfileService = {
  async getProfile(phoneNumber: string): Promise<IUser | null | {}> {
    try {
      const response = await axios.post<{ data: string }, AxiosResponse<IUser, IUser>>(
        `${HOST_URL}/user`,
        { phone: phoneNumber },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      if (!axios.isAxiosError(error)) return null;
      if (!error.response || error.response.status === HttpStatusCode.InternalServerError) return null;
      else return {};
    }
  }
};
