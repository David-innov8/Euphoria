// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/do cs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC728Km50B0RVyhZUGfaxvqRF3k7zQoCBk",
  authDomain: "euphoria-8bc2b.firebaseapp.com",
  projectId: "euphoria-8bc2b",
  storageBucket: "euphoria-8bc2b.appspot.com",
  messagingSenderId: "876891267472",
  appId: "1:876891267472:web:2cdc1d2e9cff2cd06e1315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

 
export default app
