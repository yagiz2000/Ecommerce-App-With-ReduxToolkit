import firebase from "firebase";
import counterSlice from "../features/counter/counterSlice";
const firebaseConfig = {
    apiKey: "AIzaSyDzv4cVSCZQ1_MJUUNYVKZOvq4ZR7SZ2AA",
    authDomain: "react-cart-8acbb.firebaseapp.com",
    projectId: "react-cart-8acbb",
    storageBucket: "react-cart-8acbb.appspot.com",
    messagingSenderId: "406387316507",
    appId: "1:406387316507:web:123651a7d87922ba1925be"
  };

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;


