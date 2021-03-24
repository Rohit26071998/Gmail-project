import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import 'firebase/firebase-app'


const firebaseConfig = {
    apiKey: "AIzaSyDJdguMzhELNxC-mSyQ0Lmi0dYvXI_-1xw",
    authDomain: "fir-d6823.firebaseapp.com",
    projectId: "fir-d6823",
    storageBucket: "fir-d6823.appspot.com",
    messagingSenderId: "638856898614",
    appId: "1:638856898614:web:1fdef3e610b29f67ea5097",
    measurementId: "G-ZHK0PLBZPE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth,provider } 