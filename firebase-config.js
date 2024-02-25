import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdHYvmxTw1UIdd-Pnf7XBn64nMLF2C4iU",
  authDomain: "cleanup-connect-5cae8.firebaseapp.com",
  projectId: "cleanup-connect-5cae8",
  storageBucket: "cleanup-connect-5cae8.appspot.com",
  messagingSenderId: "825434098661",
  appId: "1:825434098661:web:c7dbfe5e47117295833d0c"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;