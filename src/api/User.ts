import axios from 'axios';
import { User } from '../types/User.type';

export async function getById(id: string) {
  const user = await axios.get<User>(`/users/${id}`);
  return user.data;
}

export async function findOneUser(selector: Record<string, any>, options: Record<string, any>) {
  const user = await axios.post<User>('/users/find-one', selector, options);
  console.log('user', user);
  
  return user.data;
}
