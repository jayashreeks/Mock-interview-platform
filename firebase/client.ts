// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD34kREHjmxRWJfd7q64hQJOzxLrGh2eVU",
  authDomain: "prepwise-6a9d0.firebaseapp.com",
  projectId: "prepwise-6a9d0",
  storageBucket: "prepwise-6a9d0.firebasestorage.app",
  messagingSenderId: "1072290935695",
  appId: "1:1072290935695:web:6657e5845fca21223611fa",
  measurementId: "G-GSZHJDW7G7"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };