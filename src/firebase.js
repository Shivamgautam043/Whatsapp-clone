import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC88e0MSWm2SWU8X136ieZst-MKCO9Oigc",
  authDomain: "whatsapp-clone-b76a0.firebaseapp.com",
  projectId: "whatsapp-clone-b76a0",
  storageBucket: "whatsapp-clone-b76a0.appspot.com",
  messagingSenderId: "897038065546",
  appId: "1:897038065546:web:b42cffc64bd4f220f53273"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
