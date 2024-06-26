// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCBSvKMGBz2clAtEswbHPSGY2l1vKpH2U",
  authDomain: "lorenstore.firebaseapp.com",
  projectId: "lorenstore",
  storageBucket: "lorenstore.appspot.com",
  messagingSenderId: "36618355302",
  appId: "1:36618355302:web:115dca7c3789e4177563a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);