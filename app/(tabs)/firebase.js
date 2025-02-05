// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { dismissBrowser } from "expo-web-browser";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBv2JcDguyvtjCNo2bILtBgswYtn8Arr8Q",
//   authDomain: "onshop-ce1c1.firebaseapp.com",
//   projectId: "onshop-ce1c1",
//   storageBucket: "onshop-ce1c1.firebasestorage.app",
//   messagingSenderId: "319769004204",
//   appId: "1:319769004204:web:6f43592708cd3b433db709",
//   measurementId: "G-VMT5HYBW75"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default db;

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBv2JcDguyvtjCNo2bILtBgswYtn8Arr8Q",
  authDomain: "onshop-ce1c1.firebaseapp.com",
  projectId: "onshop-ce1c1",
  storageBucket: "onshop-ce1c1.firebasestorage.app",
  messagingSenderId: "319769004204",
  appId: "1:319769004204:web:6f43592708cd3b433db709",
  measurementId: "G-VMT5HYBW75"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
