import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/Auth';
import AuthLayout from '../layouts/AuthLayout';

export default function ProtectedMiddleware() {
  const { user, checkToken } = useAuthStore();
  if (!user) return <Navigate to="/" />;  
  checkToken();
  
  return <AuthLayout />;
}
