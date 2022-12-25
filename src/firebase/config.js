import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDN9MO_NSwj_9V-oFAiIBpBpG9HvnJ5rk8",
  authDomain: "live-chat-378cb.firebaseapp.com",
  projectId: "live-chat-378cb",
  storageBucket: "live-chat-378cb.appspot.com",
  messagingSenderId: "79484589135",
  appId: "1:79484589135:web:917a2b138ecc2180d8863a",
  measurementId: "G-DQ3SXP7D98",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFireStore, timeStamp, projectAuth };
