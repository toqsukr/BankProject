import Cookies from 'js-cookie';
import { IRegisterRequest } from './auth.interface';

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const saveTokenToStorage = (accessToken: string) => {
  Cookies.set(Tokens.ACCESS_TOKEN, accessToken, { secure: true });
};

export const deleteTokenFromStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN);
};

export const saveUserToStorage = (data: Omit<IRegisterRequest, 'password'>) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};

export enum Tokens {
  ACCESS_TOKEN = 'accessToken'
}
