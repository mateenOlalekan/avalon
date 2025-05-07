// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7U0Ir4nzRYj8ypol4B7GZ8VxyEf0r1Tk",
  authDomain: "luxemarket-79891.firebaseapp.com",
  projectId: "luxemarket-79891",
  storageBucket: "luxemarket-79891.appspot.com", // Fixed: .appspot.com instead of .firebasestorage.app
  messagingSenderId: "104295192222",
  appId: "1:104295192222:web:a5890cb01c32ecfad38d8f",
  measurementId: "G-9NLRQ7NLW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (it might not be supported in all environments)
let analytics = null;
// Use of a promise to handle analytics initialization
const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized successfully");
    } else {
      console.log("Firebase Analytics is not supported in this environment");
    }
  } catch (error) {
    console.error("Error initializing Firebase Analytics:", error);
  }
};

// Initialize Analytics if in browser environment
if (typeof window !== 'undefined') {
  initAnalytics();
}

// Initialize Firebase Authentication
const auth = getAuth(app);

export { app, analytics, auth };