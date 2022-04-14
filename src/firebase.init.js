// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKKpgvDmKBdzk8N5WmtCJEwW6vXqtCTHM",
  authDomain: "genius-car-services-3b9c4.firebaseapp.com",
  projectId: "genius-car-services-3b9c4",
  storageBucket: "genius-car-services-3b9c4.appspot.com",
  messagingSenderId: "16075469206",
  appId: "1:16075469206:web:c688950a833d9d4d8d6db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;