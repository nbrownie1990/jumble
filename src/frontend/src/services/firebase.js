import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey:`${process.env.REACT_APP_FIREBASE_CONFIG_API}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_CONFIG_AUTH}`,
    databaseURL: `${process.env.REACT_APP_FIREBASE_CONFIG_URL}`,
    projectId: `${process.env.REACT_APP_FIREBASE_CONFIG_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_CONFIG_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_CONFIG_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_CONFIG_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_CONFIG_MEASURE_ID}`
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
