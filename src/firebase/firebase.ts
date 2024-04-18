import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCc0lYti0_LhoVBBb5HLH4zrFsybYCSrM",
  authDomain: "gamespace-36145.firebaseapp.com",
  projectId: "gamespace-36145",
  storageBucket: "gamespace-36145.appspot.com",
  messagingSenderId: "28674642781",
  appId: "1:28674642781:web:08182b068ba692ea45ceb4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
