// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"; // Import getAuth to use Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANGi4DKIrlfMWlfnPGe0pPImvLbYaeT4k",
    authDomain: "sih-hackathon-906de.firebaseapp.com",
    projectId: "sih-hackathon-906de",
    storageBucket: "sih-hackathon-906de.appspot.com",
    messagingSenderId: "470534870675",
    appId: "1:470534870675:web:78c27fb81593265aaa5f66",
    measurementId: "G-49GM2H5B8N"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export {auth};
