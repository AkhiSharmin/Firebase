// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvmOL9Ves99isexTXrSZOMWmsfk9SPWTs",
    authDomain: "simple-firebase2-a392a.firebaseapp.com",
    projectId: "simple-firebase2-a392a",
    storageBucket: "simple-firebase2-a392a.firebasestorage.app",
    messagingSenderId: "127042988828",
    appId: "1:127042988828:web:c076f85cc6a6f0c65528d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export default auth;