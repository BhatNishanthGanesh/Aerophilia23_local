import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.config.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.config.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.config.REACT_APP_PROJECT_ID,
  storageBucket: process.config.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.config.REACT_APP_MESAGGING_SENDER_ID,
  appId: process.config.REACT_APP_ID ,
  measurementId:process.config.REACT_APP_MEASUREMENT_ID,
});

export const auth = app.auth()
export default app
