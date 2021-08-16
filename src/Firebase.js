import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-aFPjQJ1pVivj2rGRISCgqvR2lGTUIuw",
    authDomain: "doubtssolvingplatform.firebaseapp.com",
    projectId: "doubtssolvingplatform",
    storageBucket: "doubtssolvingplatform.appspot.com",
    messagingSenderId: "886318921178",
    appId: "1:886318921178:web:40bc3dfa7f374fa7ebfce3",
    measurementId: "G-C3LPKT7SZ9"
  });
const db=firebaseApp.firestore();
export {db}