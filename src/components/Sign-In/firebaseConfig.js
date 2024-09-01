// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth to use Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2Zb-uHrWt8cLwKOTPAsFZiqRkbhR8h2U",
  authDomain: "medical-billing-system-3c173.firebaseapp.com",
  projectId: "medical-billing-system-3c173",
  storageBucket: "medical-billing-system-3c173.appspot.com",
  messagingSenderId: "962005755824",
  appId: "1:962005755824:web:7eb7f3b9ed877652559875",
  measurementId: "G-GXWPZCNPBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth };
