// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyX5AKF8EzHJw5cMCrbN1nAdtNjlmXFUs",
  authDomain: "photography-212d6.firebaseapp.com",
  projectId: "photography-212d6",
  storageBucket: "photography-212d6.appspot.com",
  messagingSenderId: "2514565012",
  appId: "1:2514565012:web:26e968588d4a0ac255c181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);