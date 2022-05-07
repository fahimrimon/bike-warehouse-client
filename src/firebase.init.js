// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJtDpJoQc_irwLLp7OGdCFyQDN6p2Ppe4",
  authDomain: "bike-warehouse-284a2.firebaseapp.com",
  projectId: "bike-warehouse-284a2",
  storageBucket: "bike-warehouse-284a2.appspot.com",
  messagingSenderId: "261206034192",
  appId: "1:261206034192:web:54798a77e383b7b3c0c795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);