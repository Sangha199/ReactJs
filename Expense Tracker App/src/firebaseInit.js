import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB4d64fFYeKqKT33z6bgViOwSHyo-lsok",
  authDomain: "expense-tracker-54d63.firebaseapp.com",
  projectId: "expense-tracker-54d63",
  storageBucket: "expense-tracker-54d63.appspot.com",
  messagingSenderId: "289475276524",
  appId: "1:289475276524:web:5b845d9e14facc2ffa3fc9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
