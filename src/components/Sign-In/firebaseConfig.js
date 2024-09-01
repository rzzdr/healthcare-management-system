// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"; // Import getAuth to use Firebase Authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIm-jKFcIp55yK_hAOlc97-gw6SyG8ePQ",
    authDomain: "atishay-workspace.firebaseapp.com",
    projectId: "atishay-workspace",
    storageBucket: "atishay-workspace.appspot.com",
    messagingSenderId: "357106872397",
    appId: "1:357106872397:web:7b76183f806ba872bb6c04",
    measurementId: "G-ZVHPGL7XNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

export {auth};
