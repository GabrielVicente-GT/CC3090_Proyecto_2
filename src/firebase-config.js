// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDJcbo1oRvSTTT_FcLJ8cPTRoVq0gVFlc",
  authDomain: "kodonote.firebaseapp.com",
  projectId: "kodonote",
  storageBucket: "kodonote.appspot.com",
  messagingSenderId: "223135808540",
  appId: "1:223135808540:web:9b595e4b74c4a14b89f3d9",
  measurementId: "G-EVB7GZ1F7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)