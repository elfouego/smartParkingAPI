// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhhBVi-tyREMJ356QYwP1cr62yRMmElYM",
  authDomain: "smartparking-8dcd2.firebaseapp.com",
  databaseURL: "https://smartparking-8dcd2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smartparking-8dcd2",
  storageBucket: "smartparking-8dcd2.appspot.com",
  messagingSenderId: "572091456455",
  appId: "1:572091456455:web:c247915dfc2d12ecd757e2",
  measurementId: "G-RV9YT57G3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);