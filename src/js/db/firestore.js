import 'firebase/firestore'
import { initializeApp } from "firebase/app";

const config = {
    apiKey: "AIzaSyCw4p3nZBeZAwbFD-wXX3t9paoytcOveLg",
    authDomain: "electron-chat-a8e9a.firebaseapp.com",
    databaseURL: "https://electron-chat-a8e9a.firebaseio.com",
    projectId: "electron-chat-a8e9a",
    storageBucket: "electron-chat-a8e9a.appspot.com",
    messagingSenderId: "1080208638230",
    appId: "1:1080208638230:web:4a6929bdfecd724fb61037",
    measurementId: "G-MV48ZKTVCQ"
  };

  const db = initializeApp(config);
  export default db;
  