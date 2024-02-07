import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpuOEWqXUG0TSUebmDYgOvLWueV-Yk0Aw",
  authDomain: "private-route-with-context.firebaseapp.com",
  projectId: "private-route-with-context",
  storageBucket: "private-route-with-context.appspot.com",
  messagingSenderId: "435660806639",
  appId: "1:435660806639:web:459442920961689533be1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);