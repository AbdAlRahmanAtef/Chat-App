// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRUp4lcGmw0OnlpUh5aPTUxaWmiUKWvlo",
  authDomain: "chat-app-5240.firebaseapp.com",
  projectId: "chat-app-5240",
  storageBucket: "chat-app-5240.appspot.com",
  messagingSenderId: "550813385498",
  appId: "1:550813385498:web:39c3d75e391162dfbb62a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);