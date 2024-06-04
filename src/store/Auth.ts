/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode, type JwtPayload } from "jwt-decode";
import { create } from "zustand";
import { User, UserWithoutPassword } from "../types/User.type";
import { checkToken, logout, refreshToken, signIn } from "../api/Auth";
import { getById } from "../api/User";
import { getUser, removeUser, setUser } from "../utils/Auth";

type AuthStore = {
  user: UserWithoutPassword | null;
  getProfile: (id: string) => Promise<UserWithoutPassword>;
  login: (data: Pick<User, "email" | "password">) => Promise<string | null>;
  refresh: () => Promise<{ accessToken: string; refreshToken: string }>;
  checkToken: () => Promise<void>;
  logout: () => Promise<void>;
};

const useAuthStore = create<AuthStore>((set, get) => ({
  user: getUser(),
  getProfile: (id) => {
    return getById(id);
  },
  login: async (data) => {
    try {
      const response = await signIn(data);

      if (!response)
        return "Une erreur est survenue. Veuillez vérifier les information saisies.";

      const decodedToken = jwtDecode(response.accessToken) as JwtPayload & {
        sub: string;
      };

      const profile = await get().getProfile(decodedToken.sub);

      set({ user: profile });
      setUser(profile);

      return null;
    } catch (e: any) {
      console.log("e", e);

      return e.code === 404
        ? "L'adresse mail ou le mot de passe est erroné."
        : "Une erreur est survenue";
    }
  },
  refresh: async () => {
    const tokens = await refreshToken();
    return tokens;
  },
  checkToken: async () => {
    const checkValidToken = await checkToken();
    if (!checkValidToken) {
      removeUser();
      set({ user: null });
      await logout();
    }
  },
  logout: async () => {
    removeUser();
    set({ user: null });
    await logout();
  },
}));

export default useAuthStore;
