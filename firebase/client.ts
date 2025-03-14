// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import {Auth, getAuth} from "firebase/auth";
import {FirebaseStorage, getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDog-kVH7he0ncwk1v-K4QoF2O52z-_cuY",
  authDomain: "real-state-website-13b26.firebaseapp.com",
  projectId: "real-state-website-13b26",
  storageBucket: "real-state-website-13b26.firebasestorage.app",
  messagingSenderId: "699477886309",
  appId: "1:699477886309:web:ca57874fdd6de0457d4d8c",
};

// Initialize Firebase
const currentApps = getApps();
let auth:Auth;
let storage:FirebaseStorage
if(!currentApps.length){
    const app= initializeApp(firebaseConfig)
    auth=getAuth(app)
    storage=getStorage(app)
}else{
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}

export {auth,storage}