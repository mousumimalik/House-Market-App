import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAokKGnBDXldQwQXNnFX6lMYBgRjFUA4b0",
  authDomain: "house-market-app-6690d.firebaseapp.com",
  projectId: "house-market-app-6690d",
  storageBucket: "house-market-app-6690d.appspot.com",
  messagingSenderId: "467064082603",
  appId: "1:467064082603:web:72f5d4d331b36958cf67ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();