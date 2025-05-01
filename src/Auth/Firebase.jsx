// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCeN3BYpnLMotkho9O84QkCPeYMoDjkmVQ",
  authDomain: "ecommerce-product-73be0.firebaseapp.com",
  projectId: "ecommerce-product-73be0",
  storageBucket: "ecommerce-product-73be0.appspot.com", // fixed domain
  messagingSenderId: "847138627025",
  appId: "1:847138627025:web:7f09be2234f2ab3b6a54f0",
  measurementId: "G-QBQM8SY0Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };
 