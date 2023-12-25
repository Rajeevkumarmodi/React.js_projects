// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34CUbswe79b2Xvy7JR8Wtvobp7Ndj6EM",
  authDomain: "react-ecommerce-93ce7.firebaseapp.com",
  projectId: "react-ecommerce-93ce7",
  storageBucket: "react-ecommerce-93ce7.appspot.com",
  messagingSenderId: "130623514505",
  appId: "1:130623514505:web:57d266c8eae0b0c5676358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
