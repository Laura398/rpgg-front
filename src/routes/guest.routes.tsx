import { RouteObject } from 'react-router-dom';
import Login from '../views/auth/Login';

const guestRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <Login />,
  },
];

export default guestRoutes;
