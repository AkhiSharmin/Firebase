//do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_e3ZDRKdUFhcuaQ41Jdnboi7ew5nZRs0",
    authDomain: "simple-firebase-18c20.firebaseapp.com",
    projectId: "simple-firebase-18c20",
    storageBucket: "simple-firebase-18c20.firebasestorage.app",
    messagingSenderId: "168038809560",
    appId: "1:168038809560:web:ea738371c54b6f77097cad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
