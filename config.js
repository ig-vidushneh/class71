import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCTIVYAkiunZGpW_uen2NxQQB3esR6oIZY",
  authDomain: "dnc22-b6366.firebaseapp.com",
  projectId: "dnc22-b6366",
  storageBucket: "dnc22-b6366.appspot.com",
  messagingSenderId: "749484033052",
  appId: "1:749484033052:web:767c9c70c2d4e12cd44bd9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
