import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxG3ger8svrjr8EIldo7UqAOaEDCS2xNA",
  authDomain: "react-app-cursos-ef67c.firebaseapp.com",
  databaseURL: "https://react-app-cursos-ef67c.firebaseio.com",
  projectId: "react-app-cursos-ef67c",
  storageBucket: "react-app-cursos-ef67c.appspot.com",
  messagingSenderId: "603877878162",
  appId: "1:603877878162:web:197734de2d0c7003bcf94b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//para grabar informacion

//referencia a firestore
const db = firebase.firestore();

//primer auth provider, es lo mismo para autentificarse con twitter, github, etc
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
