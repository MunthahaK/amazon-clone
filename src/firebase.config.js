// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEmFgTLrcH5NyAp3RaWt8TcOFVOXWlPsA",
  authDomain: "clone-18586.firebaseapp.com",
  projectId: "clone-18586",
  storageBucket: "clone-18586.appspot.com",
  messagingSenderId: "1093046204342",
  appId: "1:1093046204342:web:d98475c623022768aab317",
  measurementId: "G-0D12CRYSSE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
