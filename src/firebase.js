import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-D3o4stpbzhJ9iPKdoyYyTmYmx3lKIu0",
  authDomain: "clone-8f724.firebaseapp.com",
  databaseURL: "https://clone-8f724.firebaseio.com",
  projectId: "clone-8f724",
  storageBucket: "clone-8f724.appspot.com",
  messagingSenderId: "993996923340",
  appId: "1:993996923340:web:c0873005fe498948c0bd69",
  measurementId: "G-XVSXH0XFMD",
});

let auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
