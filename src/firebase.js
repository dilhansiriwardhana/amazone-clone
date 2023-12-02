import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd9dQ3WrQ9ppiv-PV-PDZLldLXb4mg2GY",
  authDomain: "e-challenge-ec51a.firebaseapp.com",
  projectId: "e-challenge-ec51a",
  storageBucket: "e-challenge-ec51a.appspot.com",
  messagingSenderId: "984382205097",
  appId: "1:984382205097:web:f0104db2a4fae83e0d0db8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Correct usage: pass the firebaseApp instance to getFirestore and getAuth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
