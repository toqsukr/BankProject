import { HOST_URL } from '@constants/constants';
import { ICard } from '@store/cards/cards.interface';
import { IContact } from '@store/contacts/contacts.interface';
import axios, { AxiosResponse, HttpStatusCode } from 'axios';
import { IUser } from '../auth/auth.interface';
import { ICardRequest } from './user.interface';

export const UserService = {
  async getUser(phoneNumber: string): Promise<IUser | null | {}> {
    try {
      const response = await axios.post<{ data: string }, AxiosResponse<IUser>>(
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
  },

  async getUserContacts(phoneNumber: string) {
    const response = await axios.post<{ data: string }, AxiosResponse<IContact[]>>(
      `${HOST_URL}/user/contacts`,
      { phone: phoneNumber },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  },

  async getUserCards(phoneNumber: string) {
    const response = await axios.post<{ data: string }, AxiosResponse<ICard[]>>(
      `${HOST_URL}/user/cards`,
      { phone: phoneNumber },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  },

  async appendCard(cardData: ICardRequest) {
    const response = await axios.post<{ cardData: ICardRequest }, AxiosResponse<ICard[]>>(
      `${HOST_URL}/user/cards/add`,
      cardData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  },

  async deleteCard(cardNumber: string) {
    const response = await axios.delete<{ data: string }, AxiosResponse<ICard[]>>(
      `${HOST_URL}/user/cards/delete`,
      {
        data: { cardNumber },
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  }
};
