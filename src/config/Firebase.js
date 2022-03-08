// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB90EOG9FIqIXFcN2A9MakpU9-gDQnahOw",
  authDomain: "github-finder-alan.firebaseapp.com",
  projectId: "github-finder-alan",
  storageBucket: "github-finder-alan.appspot.com",
  messagingSenderId: "471371052382",
  appId: "1:471371052382:web:38f67c755373553fe50bcf",
  measurementId: "G-53WJFV0WDN"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);