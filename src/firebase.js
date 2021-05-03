import firebase from "firebase";
const  firebaseConfig = {
    apiKey: "AIzaSyBuPKAIXJ0eRhg9o5WCvHEIHr2nd9xIpl8",
    authDomain: "disneyplus-clone-f2ee7.firebaseapp.com",
    projectId: "disneyplus-clone-f2ee7",
    storageBucket: "disneyplus-clone-f2ee7.appspot.com",
    messagingSenderId: "168676422663",
    appId: "1:168676422663:web:e90fbe75b348bbbe18a6a2",
    measurementId: "G-JLZE79B6NY"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;