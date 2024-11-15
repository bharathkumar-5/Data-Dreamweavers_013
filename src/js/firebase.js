// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDExjNvgU-Nwode6WNJs4AF5sGdbS6okyA",
    authDomain: "rct124-construct-week.firebaseapp.com",
    projectId: "rct124-construct-week",
    storageBucket: "rct124-construct-week.appspot.com",
    messagingSenderId: "695573150996",
    appId: "1:695573150996:web:547025eebc1ac6bd771601"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
