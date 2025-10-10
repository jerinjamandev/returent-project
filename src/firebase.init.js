import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBLrIvsSZduEnrqC5UYhho1twZ7Be-C4_I",
  authDomain: "react-restu2.firebaseapp.com",
  projectId: "react-restu2",
  storageBucket: "react-restu2.firebasestorage.app",
  messagingSenderId: "776105579759",
  appId: "1:776105579759:web:57cb184ffa0819925d371a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
