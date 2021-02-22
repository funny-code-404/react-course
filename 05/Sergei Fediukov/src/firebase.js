import firebase from 'firebase';
import store from './redux';

const config = {
    apiKey: "AIzaSyAnLK4KM5MvSs1vLrQ8Fg0_h4UFSj7nPJs",
    authDomain: "age-of-empires-43a16.firebaseapp.com",
    databaseURL: "https://age-of-empires-43a16-default-rtdb.firebaseio.com",
    projectId: "age-of-empires-43a16",
    storageBucket: "age-of-empires-43a16.appspot.com",
    messagingSenderId: "482112059619",
    appId: "1:482112059619:web:7c4c9dd824ddc1be836dd6",
    measurementId: "G-ZC2H0FNN5E"
};

const rrfConfig = {
    userProfile: 'users'
}
export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
}

firebase.initializeApp(config);

export const database = firebase.database;

export const auth = firebase.auth();

export default firebase;