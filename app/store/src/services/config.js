import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8dmoh6JRwK2_V8IGUcs1IrzusG5gilDw",
  authDomain: "store-sonor.firebaseapp.com",
  projectId: "store-sonor",
  storageBucket: "store-sonor.appspot.com",
  messagingSenderId: "746253120288",
  appId: "1:746253120288:web:c7b2feec3efa678ed8dd45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancia de fireStore y la exportamos para disponibilizarla en la app.
export const db = getFirestore(app);
