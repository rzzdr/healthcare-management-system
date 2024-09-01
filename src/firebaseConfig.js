import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIm-jKFcIp55yK_hAOlc97-gw6SyG8ePQ",
    authDomain: "atishay-workspace.firebaseapp.com",
    projectId: "atishay-workspace",
    storageBucket: "atishay-workspace.appspot.com",
    messagingSenderId: "357106872397",
    appId: "1:357106872397:web:7b76183f806ba872bb6c04",
    measurementId: "G-ZVHPGL7XNG"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};
