import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDY73XQRwAkQpLfSP04QPKNfkETtJ8_rVI",
  authDomain: "eshop-f3052.firebaseapp.com",
  projectId: "eshop-f3052",
  storageBucket: "eshop-f3052.appspot.com",
  messagingSenderId: "946659903033",
  appId: "1:946659903033:web:a24bcdffe8fe78e1446fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
