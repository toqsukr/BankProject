import { Routes } from '@constants/constants';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth.hook';

export const useAuthRedirect = () => {
  const {
    state: { user }
  } = useAuth();
  const navigate = useNavigate();
  const redirectTo = (path: Routes) => navigate(path);
  useEffect(() => {
    if (!!user) redirectTo(Routes.DEFAULT_ROUTE);
  }, [user]);
};
