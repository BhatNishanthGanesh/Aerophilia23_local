// import firebase from "firebase/app";
// import { getAuth } from "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.config.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.config.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.config.REACT_APP_PROJECT_ID,
//   storageBucket: process.config.REACT_APP_STORAGE_BUCKET ,
//   messagingSenderId:process.config.REACT_APP_MESAGGING_SENDER_ID,
//   appId: process.config.REACT_APP_ID ,
//   measurementId:process.config.REACT_APP_MEASUREMENT_ID,
// });

// export const auth = getAuth(app)
// export default app

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN8H-HRd_jVDLprNAt96KC3iQKs1qqgZA",
  authDomain: "aerophilia-2023.firebaseapp.com",
  projectId: "aerophilia-2023",
  storageBucket: "aerophilia-2023.appspot.com",
  messagingSenderId: "171266886388",
  appId: "1:171266886388:web:4e08221d9311367f5f6ca1",
  measurementId: "G-E5VYDS5XVH"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)