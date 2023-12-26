import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUzYrlTRMx13VAEOOz1A8iD_kxdNL3v7g",
  authDomain: "flowers-hk.firebaseapp.com",
  projectId: "flowers-hk",
  storageBucket: "flowers-hk.appspot.com",
  messagingSenderId: "346351802664",
  appId: "1:346351802664:web:08d73b5e636af8542e181d",
  measurementId: "G-24991QC8YL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
