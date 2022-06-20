import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpF52kWZB2BT0c2Bq0iC6bYT8Fn8prjqo",
    authDomain: "firestore-test-5f2c3.firebaseapp.com",
    projectId: "firestore-test-5f2c3",
    storageBucket: "firestore-test-5f2c3.appspot.com",
    messagingSenderId: "170636456610",
    appId: "1:170636456610:web:430f9bce204faf3c78ddfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}