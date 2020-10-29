import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAnvWWXaIvXpg8SeZcJHq59bV2SaQ89m8",
    authDomain: "myfirst-b45ab.firebaseapp.com",
    databaseURL: "https://myfirst-b45ab.firebaseio.com",
    projectId: "myfirst-b45ab",
    storageBucket: "myfirst-b45ab.appspot.com",
    messagingSenderId: "573088707706",
    appId: "1:573088707706:web:51db39b0c2998e9aeef7c3",
    measurementId: "G-140T37VZS1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;