//1st install npm install firebase
//this is firebase config file its mandatory to create connection between firebase app & react app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCyw5KwrEMTjGazMCkQTFvS8gT6Su6YhF4",
  authDomain: "react-machine-test.firebaseapp.com",
  projectId: "react-machine-test",
  storageBucket: "react-machine-test.appspot.com",
  messagingSenderId: "423315529998",
  appId: "1:423315529998:web:36ce22a057ddbe17ebb75f",
  measurementId: "G-H4DP1N6ZLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)


export default fireDB