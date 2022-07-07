import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbCmZ7d1G3q3rqKA0B8_utiWiueR6wLNo",
    authDomain: "todo-app-cp-fce55.firebaseapp.com",
    projectId: "todo-app-cp-fce55",
    storageBucket: "todo-app-cp-fce55.appspot.com",
    messagingSenderId: "1067711164806",
    appId: "1:1067711164806:web:5556aa7fea7fc5a60ebc07",
    measurementId: "G-Q3LBP45B3X"
});

const db = firebaseApp.firestore();

export {db};