import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTjAZL93QN_3HDeNhavB__DM6L0_lW_wY",
    authDomain: "sua-accounts.firebaseapp.com",
    projectId: "sua-accounts",
    storageBucket: "sua-accounts.appspot.com",
    messagingSenderId: "306918184040",
    appId: "1:306918184040:web:aa5a8573f9551faa4e97dd",
    measurementId: "G-5RWDT9LX4J"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)