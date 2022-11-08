import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyD3ptwT7XBQ74KMgBXViA_oFnnG7bs9M4A",
  authDomain: "chat-cdb4f.firebaseapp.com",
  projectId: "chat-cdb4f",
  storageBucket: "chat-cdb4f.appspot.com",
  messagingSenderId: "640080686887",
  appId: "1:640080686887:web:5ae51e17827c78a806c302",
  measurementId: "G-Y7189VVTWF"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();