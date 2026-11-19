import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyD8a3GI6LAh0ZU8RfyduyXnP6Qsad2YcUQ",
  authDomain: "learnpath-35408.firebaseapp.com",
  projectId: "learnpath-35408",
  storageBucket: "learnpath-35408.firebasestorage.app",
  messagingSenderId: "596935749197",
  appId: "1:596935749197:web:a5bf44e0608eeb64e1f604",
  measurementId: "G-NG2F5W3CZB"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
