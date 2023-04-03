import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9jSKdF5IACaRM_wyfqoE-PEo1euREiVA",
  authDomain: "bonanza-c4f87.firebaseapp.com",
  projectId: "bonanza-c4f87",
  storageBucket: "bonanza-c4f87.appspot.com",
  messagingSenderId: "496176484211",
  appId: "1:496176484211:web:49f7fd4faf10983737bf06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db =  getFirestore(app);
export default app;