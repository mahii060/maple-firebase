// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwYdulh-B0gWFveL_MIvpvZ7uT-GVzno0",
    authDomain: "maple-firebase-dbbf0.firebaseapp.com",
    projectId: "maple-firebase-dbbf0",
    storageBucket: "maple-firebase-dbbf0.appspot.com",
    messagingSenderId: "345793434833",
    appId: "1:345793434833:web:3b4424092eb7e807fce1f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app