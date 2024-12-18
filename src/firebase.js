// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const messagingSenderId = import.meta.env.VITE_messagingSenderId;
const appId = "AIzaSyDnjrBAIwrXJbbQbaQWCWsZ4vCL9O0WPxo"
const storageBucket = "gas-leak-detector---wst.firebasestorage.app"
const projectId = "gas-leak-detector---wst"
const databaseURL = "https://gas-leak-detector---wst-default-rtdb.asia-southeast1.firebasedatabase.app"
const authDomain = 'gas-leak-detector---wst.firebaseapp.com'
const apiKey = 't68A10OSNSZtWrxrBpgFZHn6/hg1aeGmsYwdaYe3HC0gXcU31YV1B7TtnjHzdtQLAyeXKWsaKoeQauDr7svnlw=='

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
