import firebase from "firebase/app"; // importamos todo el objeto
import 'firebase/firestore'; // para expandir
import 'firebase/auth'; // para expandir

const firebaseConfig = {
  apiKey: "AIzaSyAp3ialkfdO5sci_xdutq-ezkNqV2M0oKg",
  authDomain: "udemy-courses-70575.firebaseapp.com",
  databaseURL: "https://udemy-courses-70575.firebaseio.com",
  projectId: "udemy-courses-70575",
  storageBucket: "udemy-courses-70575.appspot.com",
  messagingSenderId: "1066326051082",
  appId: "1:1066326051082:web:ac207a1debd17da6fc92f3"
};

firebase.initializeApp(firebaseConfig); // hasta aquí ya podemos usar firebase

// otras configuraciones

const db = firebase.firestore(); // esta es la base de datos

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase,
}
