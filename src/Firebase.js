// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-932f2.firebaseapp.com",
  projectId: "mern-stack-932f2",
  storageBucket: "mern-stack-932f2.firebasestorage.app",
  messagingSenderId: "189576626735",
  appId: "1:189576626735:web:91c14ab555ff4fb92f7cda"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);