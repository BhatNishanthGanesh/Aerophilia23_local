
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