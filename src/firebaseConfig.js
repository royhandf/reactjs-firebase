// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBm6pWBcV7rkSdSE2KPD3MeQ73cLBVpf0",
  authDomain: "reactjs-with-firebase-fbea7.firebaseapp.com",
  databaseURL:
    "https://reactjs-with-firebase-fbea7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactjs-with-firebase-fbea7",
  storageBucket: "reactjs-with-firebase-fbea7.appspot.com",
  messagingSenderId: "1068842854865",
  appId: "1:1068842854865:web:dac07679b4c549a5fd98f0",
  measurementId: "G-ZK12M6RHQJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
