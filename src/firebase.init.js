// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArtq_m6xXYoeL1lY6wNIwfg4KMSQ-Ps7U",
  authDomain: "ema-john-simple-6de23.firebaseapp.com",
  projectId: "ema-john-simple-6de23",
  storageBucket: "ema-john-simple-6de23.appspot.com",
  messagingSenderId: "742321801066",
  appId: "1:742321801066:web:960aec1b8b7ea1d1a78713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;