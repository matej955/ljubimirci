import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMDTuiaUNyKx3pHTz1KJL3NpWCkgXDa2M",
  authDomain: "zivotinjci.firebaseapp.com",
  projectId: "zivotinjci",
  storageBucket: "zivotinjci.appspot.com/",
  appId: "1:20154027515:android:25475513285a1083598f5e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default { app, auth, firestore };
