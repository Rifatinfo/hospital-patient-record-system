// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwvEAiRjZY8yPxpgZUG_sok9BED3yDLzI",
  authDomain: "patient-data-management-c90af.firebaseapp.com",
  projectId: "patient-data-management-c90af",
  storageBucket: "patient-data-management-c90af.firebasestorage.app",
  messagingSenderId: "1016023089531",
  appId: "1:1016023089531:web:73416f49c167d09114bdde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app