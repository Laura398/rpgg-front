import axios from 'axios';
import { User } from '../types/User.type';

export async function register(body: { email: string; username: string; password: string; }) {
  return axios.post<User>('/auth/register', body).then((res) => res.data);
}

export async function signIn(body: { email: string; password: string; }) {
  const res = await axios.post<{ accessToken: string; refreshToken: string }>('/auth/login', body);
  return res.data;
}

export async function refreshToken() {
  const res = await axios.post<{ accessToken: string; refreshToken: string }>('/auth/refresh-token');
  return res.data;
}

export async function logout() {
  return axios.post('/auth/logout').then((res) => res.data);
}
