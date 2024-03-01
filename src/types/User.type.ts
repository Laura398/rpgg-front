import { z } from 'zod';

const User = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});

export type User = z.infer<typeof User>;

export type UserWithoutPassword = Omit<User, 'password'>;

export type LoginUser = Pick<User, 'email' | 'password'>;
