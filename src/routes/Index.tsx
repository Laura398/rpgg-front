import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import guestRoutes from './guest.routes';
import protectedRoutes from './protected.routes';
import AuthLayout from '../layouts/AuthLayout';

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          element: children, // All the providers
          children: [
            { element: <AuthLayout />, children: guestRoutes },
            { element: <AuthLayout />, children: protectedRoutes },
          ],
        },
      ]),
    [children]
  );
  return <RouterProvider router={router} />;
};

export default RouteProvider;



// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useMemo } from 'react';
// import Home from '../views/home/Home';

// export default function RouteProvider({ children }: { children: React.ReactNode }) {
//     const router = useMemo(
//         () =>
//           createBrowserRouter([
//             {
//               path: '/',
//               element: <Home />,
//             },
//           ]),
//         [children]
//       );
//       return <RouterProvider router={router} />;
// };