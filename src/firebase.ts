// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2rlqXlrx-41Bd2mY6ZsrxdpDj8Lj-zD4',
  authDomain: 'discord-clone-udemy-92554.firebaseapp.com',
  projectId: 'discord-clone-udemy-92554',
  storageBucket: 'discord-clone-udemy-92554.appspot.com',
  messagingSenderId: '658667509331',
  appId: '1:658667509331:web:7786713bea9a99866358a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
