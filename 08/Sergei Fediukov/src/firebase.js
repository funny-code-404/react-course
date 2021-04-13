import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAh1HGNTQuJSZQcc2ZUlpPm2BlWC9HKn4c",
    authDomain: "fir-lesson-6acac.firebaseapp.com",
    projectId: "fir-lesson-6acac",
    storageBucket: "fir-lesson-6acac.appspot.com",
    messagingSenderId: "966448380452",
    appId: "1:966448380452:web:e2390ade597a26913036b1",
    measurementId: "G-17TX58T45G"
}
firebase.initializeApp(config);

export const database = firebase.database;

export const auth = firebase.auth();

// export const googleAuthProvider = new firebase.auth.googleAuthProvider()

export default firebase;