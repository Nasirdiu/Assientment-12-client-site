import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8IqfWGB5YccDyL9LFaoc_WaSqm2GgXyw",
  authDomain: "car-auto-parts-e0b2d.firebaseapp.com",
  projectId: "car-auto-parts-e0b2d",
  storageBucket: "car-auto-parts-e0b2d.appspot.com",
  messagingSenderId: "558588105771",
  appId: "1:558588105771:web:fad2d9f577c49c7547866e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
