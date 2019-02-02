import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCb87-YcDwayxR9rZI-HxJ6LX2z_d6Q1zw",
    authDomain: "fir-auth-dba12.firebaseapp.com",
    databaseURL: "https://fir-auth-dba12.firebaseio.com",
    projectId: "fir-auth-dba12",
    storageBucket: "fir-auth-dba12.appspot.com",
    messagingSenderId: "32736171786"
};
firebase.initializeApp(config);

export default firebase;
