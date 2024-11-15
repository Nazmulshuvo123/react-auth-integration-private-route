// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD69whFgxuH-xIfyeYLrPDRGVBvFGDEIhg",
  authDomain: "auth-integration-private-32120.firebaseapp.com",
  projectId: "auth-integration-private-32120",
  storageBucket: "auth-integration-private-32120.firebasestorage.app",
  messagingSenderId: "462181222084",
  appId: "1:462181222084:web:b56976d6565abf51b92b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 