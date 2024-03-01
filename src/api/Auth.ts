import axios from 'axios';
import { User } from '../types/User.type';

export function register(body: Omit<User, 'role'>) {
  console.log('register body', body);
  return axios.post<User>('/auth/register', body).then((res) => res.data);
}

export async function signIn(body: { email: string; password: string; }) {
  const res = await axios.post<{ accessToken: string; refreshToken: string }>('/auth/login', body);
  return res.data;
}

export function refreshToken() {
  return axios
    .post<{ accessToken: string; refreshToken: string }>('/auth/refresh-token')
    .then((res) => res.data);
}

export function logout() {
  return axios.post('/auth/logout').then((res) => res.data);
}
