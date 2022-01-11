// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCVGVQLHGmjvY16Mviedw3xWgiW_CyHu-8",
//     authDomain: "jumble-113b5.firebaseapp.com",
//     databaseURL: "https://jumble-113b5-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "jumble-113b5",
//     storageBucket: "jumble-113b5.appspot.com",
//     messagingSenderId: "565820066963",
//     appId: "1:565820066963:web:ba024505a6566125c79166",
//     measurementId: "G-ZM5PM6L8RG"
// };

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


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
//const analytics = getAnalytics(app);