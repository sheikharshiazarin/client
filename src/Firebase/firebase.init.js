import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsLSgLn0IqsVpIhm-hJ0-whHCqnknG1Xk",

  authDomain: "client-28ec7.firebaseapp.com",

  projectId: "client-28ec7",

  storageBucket: "client-28ec7.appspot.com",

  messagingSenderId: "33775260555",

  appId: "1:33775260555:web:e0fcbea9d8e4c04039958e",

  measurementId: "G-W5LYWHH43F",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
