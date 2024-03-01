import { UserWithoutPassword } from "../types/User.type";

export const setUser = (user: UserWithoutPassword | null) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  if (user) return JSON.parse(user);
  return null;
};

export const removeUser = () => {
  localStorage.removeItem('user');
};
