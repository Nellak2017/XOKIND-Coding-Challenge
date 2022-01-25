import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA3412CyqYP3XiRFGH1HWgrc3zV0AhfGXI",
    authDomain: "xokind-coding-challenge.firebaseapp.com",
    projectId: "xokind-coding-challenge",
    storageBucket: "xokind-coding-challenge.appspot.com",
    messagingSenderId: 164153418432,
    appId: "1:164153418432:web:3467847a8303020b530325"
})

export const auth = app.auth();
export default app;