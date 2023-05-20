import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT15Qvrj8UWogksLzUzea5_U5HCroevyU",
  authDomain: "fir-react-f237a.firebaseapp.com",
  projectId: "fir-react-f237a",
  storageBucket: "fir-react-f237a.appspot.com",
  messagingSenderId: "229312399476",
  appId: "1:229312399476:web:28cd7a575d46d2199c6921",
  measurementId: "G-TYCJH5PQX2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
