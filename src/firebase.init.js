// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJrp9tC3dRU8_VF6o8MNCGPJ3AmeGtaS0",
  authDomain: "fir-practice-b60ea.firebaseapp.com",
  projectId: "fir-practice-b60ea",
  storageBucket: "fir-practice-b60ea.firebasestorage.app",
  messagingSenderId: "28761006230",
  appId: "1:28761006230:web:207681ec9cb535919ea2b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};