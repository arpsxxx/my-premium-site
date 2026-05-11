import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWRWvOZf7raIMKNVOeXYqnutEqLZi5TV0",
  authDomain: "sentineliq-2a00c.firebaseapp.com",
  projectId: "sentineliq-2a00c",
  storageBucket: "sentineliq-2a00c.firebasestorage.app",
  messagingSenderId: "848506360753",
  appId: "1:848506360753:web:c17dd6389026e3a1f06390",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);