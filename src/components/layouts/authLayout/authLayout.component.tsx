import { Routes } from '@constants/constants';
import { useAuth } from '@hooks/useAuth.hook';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { user }
  } = useAuth();
  return user ? <> {children}</> : <Navigate to={Routes.AUTH_ROUTE} />;
};

export default AuthLayout;
