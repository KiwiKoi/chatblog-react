import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "chatter-app-33613",
  appId: "1:854298776334:web:002b2a524c9c22f813bd5f",
  storageBucket: "chatter-app-33613.appspot.com",
  apiKey: "AIzaSyAJk38s6u0T152P8tfGsmkG3sWpgps88-Q",
  authDomain: "chatter-app-33613.firebaseapp.com",
  messagingSenderId: "854298776334",
  measurementId: "G-5MRS52FM7G",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
