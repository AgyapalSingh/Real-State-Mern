// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-mern-577d1.firebaseapp.com",
  projectId: "real-estate-mern-577d1",
  storageBucket: "real-estate-mern-577d1.firebasestorage.app",
  messagingSenderId: "478246378870",
  appId: "1:478246378870:web:cb89c69c605ee48d4fee57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);