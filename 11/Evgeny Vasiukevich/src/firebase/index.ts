import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4UpiMITdECl5mLagrtTiwnzC3S2G7f1A",
  authDomain: "triphouse-9d997.firebaseapp.com",
  projectId: "triphouse-9d997",
  storageBucket: "triphouse-9d997.appspot.com",
  messagingSenderId: "86488202972",
  appId: "1:86488202972:web:f16c6be659f76f815e7e19"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;