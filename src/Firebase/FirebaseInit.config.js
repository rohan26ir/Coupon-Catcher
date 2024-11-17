// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa6ZH1RxbxEIs98dJ7dco5f8xbYainF-I",
  authDomain: "coupons-catcher.firebaseapp.com",
  projectId: "coupons-catcher",
  storageBucket: "coupons-catcher.firebasestorage.app",
  messagingSenderId: "533312975634",
  appId: "1:533312975634:web:720b43f345cd4ed80b79cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;