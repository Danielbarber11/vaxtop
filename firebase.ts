import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // ⚠️ הערה: אנא החלף את הערכים הבאים בערכים שלך מ Firebase Console
  // 1. עבור ל https://console.firebase.google.com
  // 2. צור project חדש (אם עדיין אין לך)
  // 3. לחץ על Project Settings
  // 4. העתק את ערכי ה-config מ SDK Setup and Configuration
  
  apiKey: "AIzaSyAg-test-key-replace-with-yours",
  authDomain: "vaxtop-demo.firebaseapp.com",
  projectId: "vaxtop-demo",
  storageBucket: "vaxtop-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefghij"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
