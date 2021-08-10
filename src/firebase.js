import firebase from "firebase";
import "firebase/firestore";
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUPdkFXSQ3_wDwg6EkR9Vd1VTTd5p-9aY",
    authDomain: "lenosycarbon-3e760.firebaseapp.com",
    projectId: "lenosycarbon-3e760",
    storageBucket: "lenosycarbon-3e760.appspot.com",
    messagingSenderId: "581580659562",
    appId: "1:581580659562:web:63f2e97a3c02ff7225e313"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  export default firebase;
