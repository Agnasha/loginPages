// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEEfwveFAmMbVTwJxRmVfR9LjPAvGQnU4",
  authDomain: "quickly-work.firebaseapp.com",
  projectId: "quickly-work",
  storageBucket: "quickly-work.appspot.com",
  messagingSenderId: "678076916204",
  appId: "1:678076916204:web:86c5a2bdb159cd6dfd60c9",
  measurementId: "G-Z2BMMWMHN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);