// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBBydrD1fBG7H47qsozUxHFuxlbWH8DSaE",
    authDomain: "neolearnn-69e67.firebaseapp.com",
    projectId: "neolearnn-69e67",
    storageBucket: "neolearnn-69e67.firebasestorage.app",
    messagingSenderId: "632656148768",
    appId: "1:632656148768:web:bcb4d4355e93138c84bf45",
    measurementId: "G-PBLVPV38T6"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);