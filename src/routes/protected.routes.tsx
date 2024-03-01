import { RouteObject } from 'react-router-dom';
import Home from '../views/home/Home';

const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
];

export default protectedRoutes;
