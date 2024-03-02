import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/Auth';
import AuthLayout from '../layouts/AuthLayout';


export default function ProtectedMiddleware() {
  const { user } = useAuthStore();
  if (!user) return <Navigate to="/" />;

  return <AuthLayout />;
}
