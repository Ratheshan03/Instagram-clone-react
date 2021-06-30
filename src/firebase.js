import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDmd4ia5FoUiQHXZPAh5c0IEEjo9bN-Tg",
    authDomain: "instagram-clone-b5894.firebaseapp.com",
    projectId: "instagram-clone-b5894",
    storageBucket: "instagram-clone-b5894.appspot.com",
    messagingSenderId: "154443142680",
    appId: "1:154443142680:web:338d092e22d0eb2533156d",
    measurementId: "G-8VPHSKT78D"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };