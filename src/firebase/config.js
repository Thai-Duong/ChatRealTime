// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_zxtso0gcS3An-J4C_Ocblv86zKoE830",
  authDomain: "mess-realtime-b82e2.firebaseapp.com",
  projectId: "mess-realtime-b82e2",
  storageBucket: "mess-realtime-b82e2.appspot.com",
  messagingSenderId: "113203223501",
  appId: "1:113203223501:web:d5d9931df60e3a7c450284",
  measurementId: "G-K8E4DGY2TZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();
auth.useEmulator("http://localhost:9099");
if (window.location.hostname === "localhost") {
  db.useEmulator("localhost", "8080");
}
export { auth, db };
export default firebase;
