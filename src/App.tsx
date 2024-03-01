import { Outlet } from 'react-router-dom';
import Providers from './providers/Index';

export default function App() {
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
