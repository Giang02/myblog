// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-402616.firebaseapp.com",
  projectId: "my-blog-402616",
  storageBucket: "my-blog-402616.appspot.com",
  messagingSenderId: "969856617143",
  appId: "1:969856617143:web:083f61e6da05b4bb4a5b32",
  measurementId: "G-Q4H8Z01LDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
