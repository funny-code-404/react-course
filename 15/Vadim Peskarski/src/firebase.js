import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB7v9410QSbu8BbRQVe9FYLk2Y1L0NmogI",
  authDomain: "react-72c03.firebaseapp.com",
  projectId: "react-72c03",
  storageBucket: "react-72c03.appspot.com",
  messagingSenderId: "525231517058",
  appId: "1:525231517058:web:0b279c6ec9d97469b8339b",
  measurementId: "G-M80EK4QK16"
};

firebase.initializeApp(config);

export const database = firebase.database;

export default firebase;

