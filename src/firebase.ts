// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-dZbN9J2EY9_h_xTYpZdMPpNh5KMOido",
  authDomain: "stcs-uok.firebaseapp.com",
  projectId: "stcs-uok",
  storageBucket: "stcs-uok.firebasestorage.app",
  messagingSenderId: "723773595123",
  appId: "1:723773595123:web:bd46405896924c533d8686",
  measurementId: "G-WE571K7YVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
