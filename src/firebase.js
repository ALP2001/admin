import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJHpevhMVKGlcF2CQCc0Oz3fdNAF2Y9ZQ",
  authDomain: "kec-file-upload.firebaseapp.com",
  databaseURL: "https://kec-file-upload-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kec-file-upload",
  storageBucket: "kec-file-upload.appspot.com",
  messagingSenderId: "827325989109",
  appId: "1:827325989109:web:7232dc0a152bb5b14b85bc",
  measurementId: "G-EBQ268NQL5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
