// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu9auqh0cJEGaA_ugOK9CQG3In6YpTvco",
  authDomain: "crimedoor-firebase.firebaseapp.com",
  projectId: "crimedoor-firebase",
  storageBucket: "crimedoor-firebase.appspot.com",
  messagingSenderId: "1042409043546",
  appId: "1:1042409043546:web:d6fca61a0df65c104c4a63",
  measurementId: "G-99W4PTWW9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, db };
