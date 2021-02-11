import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK98ZOI_otUb5pzt8VaQvl7T7tDTktLE8",
  authDomain: "vue-full-8ec34.firebaseapp.com",
  projectId: "vue-full-8ec34",
  storageBucket: "vue-full-8ec34.appspot.com",
  messagingSenderId: "212588321897",
  appId: "1:212588321897:web:8a8872fed9f906797196f8",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
