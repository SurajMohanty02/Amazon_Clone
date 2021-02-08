import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCbtkAjaiqEjHtYKdmwSOWDnIuyG6Z9BCI",
  authDomain: "clone-ad4b4.firebaseapp.com",
  databaseURL: "https://clone-ad4b4.firebaseio.com",
  projectId: "clone-ad4b4",
  storageBucket: "clone-ad4b4.appspot.com",
  messagingSenderId: "718500141150",
  appId: "1:718500141150:web:f274a966da68f9df593ccf",
  measurementId: "G-E8TQ2K7C9F",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
