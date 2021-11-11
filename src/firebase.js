import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXZbf0HCdS1RWOicduAQEbbE2SGDf6_Q0",
  authDomain: "dbs-techtrek.firebaseapp.com",
  projectId: "dbs-techtrek",
  storageBucket: "dbs-techtrek.appspot.com",
  messagingSenderId: "348955708010",
  appId: "1:348955708010:web:428f713a0276b9ce501813",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
