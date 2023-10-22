import { Routes } from '@constants/constants';
import { useAuth } from '@hooks/useAuth.hook';
import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const UnauthLayout: FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { user }
  } = useAuth();
  return !!!user ? <> {children}</> : <Navigate to={Routes.DEFAULT_ROUTE} />;
};

export default UnauthLayout;
