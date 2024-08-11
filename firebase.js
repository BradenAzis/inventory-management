// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSTD4uNRxrpP_JZE6MpTYetAe_pcm4SEI",
  authDomain: "inventory-management-c2bec.firebaseapp.com",
  projectId: "inventory-management-c2bec",
  storageBucket: "inventory-management-c2bec.appspot.com",
  messagingSenderId: "284834624434",
  appId: "1:284834624434:web:60e24fd3972dec7eadaaab",
  measurementId: "G-J5D2VTZN36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};