import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCW_7nNGJi0rTTEhMz_JnWDQ9FkqULef5Y",
    authDomain: "cyberphamacy.firebaseapp.com",
    projectId: "cyberphamacy",
    storageBucket: "cyberphamacy.appspot.com",
    messagingSenderId: "801494470175",
    appId: "1:801494470175:web:fc723a15683e545ee80f2a",                         
    measurementId: "G-E57JPNBF9B"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore(app);
export const ContactsRef = db.collection("Contacts")

export { firebase };