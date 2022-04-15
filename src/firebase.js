// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAafN5OKyzNsUYHBQRRtCm7n7xMGgFixyI",
  authDomain: "saturnoceramica-9df62.firebaseapp.com",
  projectId: "saturnoceramica-9df62",
  storageBucket: "saturnoceramica-9df62.appspot.com",
  messagingSenderId: "222275815708",
  appId: "1:222275815708:web:6d4ac49018100ad782d2d9",
  measurementId: "G-35YQ1BY35M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
