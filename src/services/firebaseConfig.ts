import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // Import Firestore

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5JnJ2SOQT3Gu7Zm1HBroBG8HOk6m-zZQ",
    authDomain: "invoice-control-96756.firebaseapp.com",
    projectId: "invoice-control-96756",
    storageBucket: "invoice-control-96756.appspot.com",
    messagingSenderId: "408770631530",
    appId: "1:408770631530:web:ae6b88d11858aea4b83713"
});

export const db = firebaseApp.firestore();