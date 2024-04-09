import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import GuestMiddleware from '../middleware/guest';
import ProtectedMiddleware from '../middleware/protected';
import Login from '../views/auth/Login';
import Home from '../views/home/Home';
import CreateCharacter from '../views/create-character/CreateCharacter';
import ShowCharacter from '../views/show-character/ShowCharacter';

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
                { path: '/character/:id', element: <ShowCharacter />},
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
                  path: '/character/new', element: <CreateCharacter />,
                },
                {
                  path: '/character/:id/edit', element: <CreateCharacter />,
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