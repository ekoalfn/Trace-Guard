// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZsul-4j9RIDn557ftBAt3tcWQ0UwDPvM",
  authDomain: "crimerecord-90df7.firebaseapp.com",
  projectId: "crimerecord-90df7",
  storageBucket: "crimerecord-90df7.appspot.com",
  messagingSenderId: "8561813616",
  appId: "1:8561813616:web:bf46c67be4e8229f42ecb5",
  measurementId: "G-G4PPJNCSLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (app.name && typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}