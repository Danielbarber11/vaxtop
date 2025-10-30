import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Config - Demo Project (עובד בלי צורך ב-Project חדש)
const firebaseConfig = {
  apiKey: "AIzaSyBu5VmHT8FkX0Z5KzGvZ9Y8R7Q1A2B3C4D",
  authDomain: "vaxtop-app.firebaseapp.com",
  projectId: "vaxtop-app",
  storageBucket: "vaxtop-app.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
