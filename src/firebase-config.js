import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDm7eliyBItXiR6rLpgiVsTZeni_QTUg6k",
    authDomain: "blend-78b15.firebaseapp.com",
    projectId: "blend-78b15",
    storageBucket: "blend-78b15.appspot.com",
    messagingSenderId: "67840062426",
    appId: "1:67840062426:web:215ee075794f8d650b06e3",
    measurementId: "G-RWH1L1D7GL"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);