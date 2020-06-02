import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDEcwkK8HxPW_rtuvif245WggCoCN7MSmg",
    authDomain: "todolist-se.firebaseapp.com",
    databaseURL: "https://todolist-se.firebaseio.com",
    projectId: "todolist-se",
    storageBucket: "todolist-se.appspot.com",
    messagingSenderId: "362679130535",
    appId: "1:362679130535:web:276748c72db0c569e0be82"
});

export { firebaseConfig as firebase };