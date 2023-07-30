import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBMDTuiaUNyKx3pHTz1KJL3NpWCkgXDa2M",
  authDomain: "zivotinjci.firebaseapp.com",
  databaseURL: "https://zivotinjci.firebaseio.com",
  projectId: "zivotinjci",
  storageBucket: "zivotinjci.appspot.com",
  // messagingSenderId: "sender-id",
  appId: "1:20154027515:android:25475513285a1083598f5e",
  // measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
