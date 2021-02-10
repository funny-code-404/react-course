import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCIa3MQBLjFFbazxrLj4i5BNm9XiLWw9ng",
    authDomain: "army-of-empires.firebaseapp.com",
    projectId: "army-of-empires",
    storageBucket: "army-of-empires.appspot.com",
    messagingSenderId: "85104640818",
    appId: "1:85104640818:web:1b9f1901e36e42eb808d2b",
    measurementId: "G-P0FWZZTY13",
  };

  firebase.initializeApp(config);

export const database = firebase.database;

export const auth = firebase.auth();

export default firebase;