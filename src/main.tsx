import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { refreshToken } from './api/Auth';
import { getById } from './api/User';
import { setUser } from './utils/Auth';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 8000;

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const tokens = await refreshToken();
        const decodedToken = jwtDecode(tokens.accessToken) as JwtPayload & { sub: string };
        const user = await getById(decodedToken.sub);

        setUser(user);
        return;
      } catch (error) {
        const href = window.location.href;
        if (!href.includes('/auth')) window.location.href = '/auth';
        return error;
      }
    }
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
