import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzZ2cmdmidW90Wlv_kWkdHatnKcelQiuA",
  authDomain: "gamespace-project.firebaseapp.com",
  projectId: "gamespace-project",
  storageBucket: "gamespace-project.appspot.com",
  messagingSenderId: "487665568778",
  appId: "1:487665568778:web:360488757d61ab2fad23f3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
const storage = getStorage();

export { app, auth, firestore, storage };
