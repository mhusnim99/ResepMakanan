import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyB9cxz5-HMK4TQ86DCHYVs8hGkvg-eaKMo",
  authDomain: "nutrifud-ff301.firebaseapp.com",
  databaseURL: "https://nutrifud-ff301-default-rtdb.firebaseio.com",
  projectId: "nutrifud-ff301",
  storageBucket: "nutrifud-ff301.appspot.com",
  messagingSenderId: "169157035069",
  appId: "1:169157035069:web:469dc39c5f0d23ed0a1654",
  measurementId: "G-3ST24B4SV9"
});


const FIREBASE = firebase;

export default FIREBASE;