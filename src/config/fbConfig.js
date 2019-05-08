import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAw4z7epsy2SC6pKoL2VIYwsHfR0zHpbbc",
  authDomain: "dodajemy-eu.firebaseapp.com",
  databaseURL: "https://dodajemy-eu.firebaseio.com",
  projectId: "dodajemy-eu",
  storageBucket: "dodajemy-eu.appspot.com",
  messagingSenderId: "308565561689",
  appId: "1:308565561689:web:5111704fe787ef06"
};

firebase.initializeApp(config);

export default firebase;
