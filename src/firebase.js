// import firebase from "firebase/compat/app"
// import "firebase/database";
// import * as 
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"

import * as firebase from "firebase/app"



const firebaseConfig = {
    apiKey: "AIzaSyBiRe18_S3bUa5RPK5wdDobEGz1TGWeOjo",
    authDomain: "coimbatorestockmanagement.firebaseapp.com",
    databaseURL: "https://coimbatorestockmanagement-default-rtdb.firebaseio.com",
    projectId: "coimbatorestockmanagement",
    storageBucket: "coimbatorestockmanagement.appspot.com",
    messagingSenderId: "849184076172",
    appId: "1:849184076172:web:75269466f8d50a894866a9",
    measurementId: "G-3Z17SP6F8T"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

