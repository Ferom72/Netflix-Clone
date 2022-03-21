import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyDeMde0ki0eKHr9gLzFeSGC19nQq_ZBsJg",
    authDomain: "netflix-clone-4c909.firebaseapp.com",
    projectId: "netflix-clone-4c909",
    storageBucket: "netflix-clone-4c909.appspot.com",
    messagingSenderId: "263995447797",
    appId: "1:263995447797:web:b7ab90de1cac26487328bc",
    measurementId: "G-HST3MGKYR9"
}

const firebase = Firebase.initializeApp(config)

export {firebase}