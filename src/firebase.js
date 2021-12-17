// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCtA1eelst_q05iS-brUibUuqQTTF2WreM",
  authDomain: "project-4d532.firebaseapp.com",
  projectId: "project-4d532",
  storageBucket: "project-4d532.appspot.com",
  messagingSenderId: "307318674791",
  appId: "1:307318674791:web:fdf83680d5cf91bd1e0bc2",
  measurementId: "G-YRRMCKJMRD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

