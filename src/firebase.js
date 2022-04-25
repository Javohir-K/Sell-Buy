import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2udnLz8jc24qNmh58Fmii9ntWg-gRjb4",
  authDomain: "sell-buy-ed.firebaseapp.com",
  projectId: "sell-buy-ed",
  storageBucket: "sell-buy-ed.appspot.com",
  messagingSenderId: "221365586291",
  appId: "1:221365586291:web:bc6c13c5e26bd055a49d06",
  measurementId: "G-4TBGXQEEN6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
