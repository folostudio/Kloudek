import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage }  from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCosx_mRjQjD4C3dKO28GXwUAVz0_Gj3F4",
  authDomain: "kloudek-36631.firebaseapp.com",
  projectId: "kloudek-36631",
  storageBucket: "kloudek-36631.appspot.com",
  messagingSenderId: "599918945722",
  appId: "1:599918945722:web:aa6244140f28cba1e52983",
  measurementId: "G-LM44C9LPHJ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
// export const analytics = getAnalytics(app);