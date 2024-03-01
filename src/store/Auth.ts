import { jwtDecode, type JwtPayload } from 'jwt-decode';
import { create } from 'zustand';
import { User, UserWithoutPassword } from '../types/User.type';
import { logout, refreshToken, signIn } from '../api/Auth';
import { getById } from '../api/User';
import { getUser, removeUser, setUser } from '../utils/Auth';
import { useNavigate } from 'react-router-dom';

type AuthStore = {
  user: UserWithoutPassword | null;
  getProfile: (id: string) => Promise<UserWithoutPassword>;
  login: (data: Pick<User, 'email' | 'password'>) => Promise<string | null>;
  refresh: () => Promise<{ accessToken: string; refreshToken: string }>;
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

      if (!response) return 'Une erreur est survenue. Veuillez vérifier les information saisies.';
      
      if (typeof response === 'string') return response;
  
      const decodedToken = jwtDecode(response.accessToken) as JwtPayload & { sub: string };
      
      const profile = await get().getProfile(decodedToken.sub);
  
      set({ user: profile });
      setUser(profile);
  
      const navigate = useNavigate();
      navigate('/');
  
      return null;
    } catch (e: any) {
      return e.code === 404 ? "L'adresse mail ou le mot de passe est erroné." : 'Une erreur est survenue';
    }
    
  },
  refresh: async () => {
    const tokens = await refreshToken();
    return tokens;
  },
  logout: async () => {
    removeUser();
    set({ user: null });
    await logout();
  },
}));

export default useAuthStore;
