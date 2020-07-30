import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyCqjPabJF_1pqTxyHiYJmB0RoThZaslIwY",
    authDomain: "quick-tutor-7fe7f.firebaseapp.com",
    databaseURL: "https://quick-tutor-7fe7f.firebaseio.com",
    projectId: "quick-tutor-7fe7f",
    storageBucket: "quick-tutor-7fe7f.appspot.com",
    messagingSenderId: "1016931116173",
    appId: "1:1016931116173:web:653c04bb5a9e973f7ceec4",
    measurementId: "G-KXNMEJLNM8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth;
  export const db = firebase.database();