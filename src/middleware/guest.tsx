import { Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import useAuthStore from '../store/Auth';

export default function GuestMiddleware() {
  const { user } = useAuthStore();
  if (user) return <Navigate to="/" />;

  return <AuthLayout />;
}
