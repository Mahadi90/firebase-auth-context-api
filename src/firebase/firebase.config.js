// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQeNuWwkBoxfhgxHhFpf_cXEH4zOCaWEU",
  authDomain: "auth-context-firebase-1e4b7.firebaseapp.com",
  projectId: "auth-context-firebase-1e4b7",
  storageBucket: "auth-context-firebase-1e4b7.appspot.com",
  messagingSenderId: "622651905226",
  appId: "1:622651905226:web:7b53335c176269e4d35033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;