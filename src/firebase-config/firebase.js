// import { initializeApp, getApps } from "firebase/app";
// import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyB4PLaEZMyOg0j0F0Br_4Qk3OUGlydZPZM",
//   authDomain: "culture-2.firebaseapp.com",
//   databaseURL: "https://culture-2-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "culture-2",
//   storageBucket: "culture-2.appspot.com",
//   messagingSenderId: "20027048919",
//   appId: "1:20027048919:web:3cf868951998f918728192"
// };

// let app;

// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApps()[0];
// }
// export const db = getDatabase(app);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { signOut, googleProvider, auth };

import { initializeApp, getApps } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAdUWKSdzHps4eBP0xGZ9nA7_mAlxwPSU",
  authDomain: "culture-3.firebaseapp.com",
  databaseURL: "https://culture-3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "culture-3",
  storageBucket: "culture-3.appspot.com",
  messagingSenderId: "1086111972201",
  appId: "1:1086111972201:web:89f0d5cd4c76656f78dbf8",
  measurementId: "G-XQ410R5G9N"
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
export const db = getDatabase(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const imageDb = getStorage(app);
export { signOut, googleProvider, auth, imageDb };
