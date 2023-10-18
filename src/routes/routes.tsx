import { ROUTES } from '@constants/routes';
import Error from '@pages/error/Error.page';
import { createBrowserRouter } from 'react-router-dom';

export const REACT_ROUTER = createBrowserRouter([
  {
    path: ROUTES.DEFAULT_ROUTE,
    async lazy() {
      return { Component: (await import('@pages/home/Home.page')).default };
    },
    errorElement: <Error />
  },
  {
    path: ROUTES.AUTH_ROUTE,
    async lazy() {
      return { Component: (await import('@pages/auth/Auth.page')).default };
    },
    errorElement: <Error />
  }
]);
