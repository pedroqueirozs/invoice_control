// firebaseConfig.ts (ou .js)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5JnJ2SOQT3Gu7Zm1HBroBG8HOk6m-zZQ",
  authDomain: "invoice-control-96756.firebaseapp.com",
  projectId: "invoice-control-96756",
  storageBucket: "invoice-control-96756.appspot.com",
  messagingSenderId: "408770631530",
  appId: "1:408770631530:web:ae6b88d11858aea4b83713",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
