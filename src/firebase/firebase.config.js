// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC35-NjbJRHV0RI0z61B1x9fGPH3v98l6M",
  authDomain: "thatix-cooking-recipe.firebaseapp.com",
  projectId: "thatix-cooking-recipe",
  storageBucket: "thatix-cooking-recipe.appspot.com",
  messagingSenderId: "839394446077",
  appId: "1:839394446077:web:5d80d89e4eb73c0149cc94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;