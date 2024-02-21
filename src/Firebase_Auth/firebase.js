// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe7b9e48RJEtezFHYGlGYlioHHaCnwEhM",
  authDomain: "nama-c3f3b.firebaseapp.com",
  projectId: "nama-c3f3b",
  storageBucket: "nama-c3f3b.appspot.com",
  messagingSenderId: "71186609782",
  appId: "1:71186609782:web:4a9a3ac653361d12bdd157",
  measurementId: "G-ZD7XY24P72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;