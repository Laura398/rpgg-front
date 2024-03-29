import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import GuestMiddleware from '../middleware/guest';
import ProtectedMiddleware from '../middleware/protected';
import Login from '../views/auth/Login';
import Home from '../views/home/Home';
import CreateCharacter from '../views/create-character/CreateCharacter';

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: children,
          children: [
            {
              element: <AuthLayout />,
              children: [
                { path: '/', element: <Home /> },
                { path: '/character/:id'},
              ],
            },
            {
              element: <GuestMiddleware />,
              children: [
                {
                  path: '/auth',
                  element: <Login />,
                },
              ],
            },
            {
              element: <ProtectedMiddleware />,
              children: [
                {
                  path: '/character', element: <CreateCharacter />,
                },
                {
                  path: '/character/edit/:id', element: <CreateCharacter />,
                },
              ],
            }
          ],
        },
      ]),
    [children]
  );
  return <RouterProvider router={router} />;
};

export default RouteProvider;