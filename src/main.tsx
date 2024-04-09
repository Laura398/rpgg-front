import axios from 'axios';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { refreshToken } from './api/Auth';
import { getById } from './api/User';
import './index.css';
import { setUser } from './utils/Auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "mundi-bellum.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
// Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');
export const characterProfilePicRef = ref(imagesRef, 'characters-profile-pics');

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 8000;

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log('error', error);
    
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
