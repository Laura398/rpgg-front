import axios from 'axios';
import { User } from '../types/User.type';

export function getById(id: string) {
  return axios.get<User>(`/users/${id}`).then((res) => res.data);
}
