import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZ5DYcO3lnfUrpiXdqpoDP-HBYzgILvG4",
  authDomain: "smart-home-95d2e.firebaseapp.com",
  projectId: "smart-home-95d2e",
  storageBucket: "smart-home-95d2e.appspot.com",
  messagingSenderId: "453379927794",
  appId: "1:453379927794:web:a55ed0dd535d8f1f11aa6b",
  measurementId: "G-ZY5WNGW3HL"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app