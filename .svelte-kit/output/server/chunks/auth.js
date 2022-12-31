import "./index.js";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAQaTtOlBWdjeSLMkz_B-Uh-cSSnYUBJbM",
  authDomain: "menyu-47.firebaseapp.com",
  projectId: "menyu-47",
  storageBucket: "menyu-47.appspot.com",
  messagingSenderId: "81841880101",
  appId: "1:81841880101:web:15659747f65455e5a313cc",
  measurementId: "G-3CEXKY1G4K"
};
const app = initializeApp(firebaseConfig);
new GoogleAuthProvider();
getAuth(app);
