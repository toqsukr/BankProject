import { useCallback } from 'react';
import { useAuth } from './useAuth.hook';

export const useRefferalLink = () => {
  const { state } = useAuth();
  const generateReferralLink = useCallback(() => {
    if (!!!state.user) return '';
    const { name, surname } = state.user;
    const date = new Date();
    const month = date.toLocaleString('en-US', { month: 'long' }).slice(0, 3).toUpperCase();
    const year = date.getFullYear().toString();
    return `${name.toUpperCase().slice(0, 7)}${surname.toUpperCase().slice(0, 7)}-${month}${year}`;
  }, [state.user]);
  return { generateReferralLink };
};
