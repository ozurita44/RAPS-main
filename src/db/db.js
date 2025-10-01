import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { addAdmin } from './addAdmin.js';

const firebaseConfig = {
  apiKey: "AIzaSyDn29-aqIg1VB6jr1jKyawlJOV2LDEl0Fo",
  authDomain: "rapsbol.firebaseapp.com",
  projectId: "rapsbol",
  storageBucket: "rapsbol.firebasestorage.app",
  messagingSenderId: "472273089221",
  appId: "1:472273089221:web:fca4b11b76431353e2f6ac",
  measurementId: "G-KFFHK0KV3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
