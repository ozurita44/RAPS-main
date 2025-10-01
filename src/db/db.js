import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { addAdmin } from './addAdmin.js';

const firebaseConfig = {
  apiKey: "AIzaSyCIWXWl1Y7LFf9gXjvyI_WaCGJiwg2Vuuk",
  authDomain: "raps-points-db.firebaseapp.com",
  projectId: "raps-points-db",
  storageBucket: "raps-points-db.appspot.com",
  messagingSenderId: "39755402475",
  appId: "1:39755402475:web:88c1d437e46f3b6525c2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
