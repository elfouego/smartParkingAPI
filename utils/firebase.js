import { initializeApp } from "firebase/app";
const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyDhhBVi-tyREMJ356QYwP1cr62yRMmElYM",
  authDomain: "smartparking-8dcd2.firebaseapp.com",
  databaseURL: "https://smartparking-8dcd2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smartparking-8dcd2",
  storageBucket: "smartparking-8dcd2.appspot.com",
  messagingSenderId: "572091456455",
  appId: "1:572091456455:web:bdac8945120852e2d757e2",
  measurementId: "G-Y1W5KNZMB5"
};
firebase.initializeApp(firebaseConfig); // initialise l'application 
 module.exports = { firebase } ; //exporter l'application