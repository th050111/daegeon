import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrOCesdnW3CHzx882crvCcqbOLQraEQqo",
  authDomain: "daegeon-afe27.firebaseapp.com",
  projectId: "daegeon-afe27",
  storageBucket: "daegeon-afe27.appspot.com",
  messagingSenderId: "431730133479",
  appId: "1:431730133479:web:9048d58080a4cce9631542"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const authService = firebase.auth();
export const dbService = firebase.firestore();