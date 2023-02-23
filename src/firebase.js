import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYX83nl841TxHd2QZFRZc0Ri-QzJYhgRs",
  authDomain: "chat-2bc93.firebaseapp.com",
  projectId: "chat-2bc93",
  storageBucket: "chat-2bc93.appspot.com",
  messagingSenderId: "704734957531",
  appId: "1:704734957531:web:6c318611ff389fc88ee1fe",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
