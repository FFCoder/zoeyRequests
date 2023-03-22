// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZFy5PbMQCar9ybIOqxhfH5FWaVQ_P5I",
  authDomain: "zoey-requests.firebaseapp.com",
  projectId: "zoey-requests",
  storageBucket: "zoey-requests.appspot.com",
  messagingSenderId: "960654149408",
  appId: "1:960654149408:web:b035eef60aaf833aeaf945",
  measurementId: "G-0HN1355T6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const FirebaseContext = createContext();

export { app, auth, firestore };

