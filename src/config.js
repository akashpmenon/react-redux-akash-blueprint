import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpzckgIW1mJDHMjs2ncALWf6wtY5jTQc0",
  authDomain: "akash-new-redux-blpr.firebaseapp.com",
  projectId: "akash-new-redux-blpr",
  storageBucket: "akash-new-redux-blpr.appspot.com",
  messagingSenderId: "681997931702",
  appId: "1:681997931702:web:324f495c5d5d0d2ba7c217",
  measurementId: "G-F6EL84FJ3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
