import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_Fkch4HE3JYhJXjMvvN2aJGZhgExIUIw",
  authDomain: "age-of-empires-5f7ce.firebaseapp.com",
  projectId: "age-of-empires-5f7ce",
  storageBucket: "age-of-empires-5f7ce.appspot.com",
  messagingSenderId: "503244644746",
  appId: "1:503244644746:web:ace694b6e6656cbf412873",
  measurementId: "G-GJ60D9DRQD",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export const auth = firebase.auth();

export default firebase;
