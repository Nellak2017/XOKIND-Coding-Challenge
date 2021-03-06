import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, collection } from "firebase/firestore";

// I am manually putting in the api keys here because I couldn't get the environment variables working
const app = firebase.initializeApp({
    apiKey: "AIzaSyA3412CyqYP3XiRFGH1HWgrc3zV0AhfGXI",
    authDomain: "xokind-coding-challenge.firebaseapp.com",
    projectId: "xokind-coding-challenge",
    storageBucket: "xokind-coding-challenge.appspot.com",
    messagingSenderId: 164153418432,
    appId: "1:164153418432:web:3467847a8303020b530325"
})

export const auth = app.auth();
export const firestore = getFirestore();
export const colRef = collection(firestore, 'Places');

export default app;