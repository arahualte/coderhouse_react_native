// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFbeR3yovNJvjihVPDrMAE28LR_Vg7s8",
  authDomain: "todolist-login-687ef.firebaseapp.com",
  projectId: "todolist-login-687ef",
  storageBucket: "todolist-login-687ef.appspot.com",
  messagingSenderId: "193511427633",
  appId: "1:193511427633:web:070cf8afdaa144265ccf10",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
