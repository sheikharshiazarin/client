import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKTxh_JjS3eOGQj3b-S0j1kx8GijPVHFE",

  authDomain: "ware-2978d.firebaseapp.com",

  projectId: "ware-2978d",

  storageBucket: "ware-2978d.appspot.com",

  messagingSenderId: "128434976239",

  appId: "1:128434976239:web:8b84d037cb7319cf61f21a",

  measurementId: "G-JRMRYEZ3PQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
