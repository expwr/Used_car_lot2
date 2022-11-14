// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeSsvyQAwN3qbdtCQBwRcSAw7vcrP_EOw",
  authDomain: "usedcarlotloanest.firebaseapp.com",
  projectId: "usedcarlotloanest",
  storageBucket: "usedcarlotloanest.appspot.com",
  messagingSenderId: "1028806513135",
  appId: "1:1028806513135:web:4dd7922d2eee3673b0a61a",
  measurementId: "G-RPC64RXRXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);