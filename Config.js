import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfq2u3wAWfHL5pEFAqGnLOASNdWydlT4k",
    authDomain: "newsletter-3bb04.firebaseapp.com",
    projectId: "newsletter-3bb04",
    storageBucket: "newsletter-3bb04.appspot.com",
    messagingSenderId: "666893879677",
    appId: "1:666893879677:web:0f5bdb318b7d030683e414"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
  
export default firebase.database();