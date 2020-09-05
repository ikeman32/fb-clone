import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC4O9yhOQWNOkOL6WdIOW4GE50yerSzIVQ",
    authDomain: "fb-clone-db1a6.firebaseapp.com",
    databaseURL: "https://fb-clone-db1a6.firebaseio.com",
    projectId: "fb-clone-db1a6",
    storageBucket: "fb-clone-db1a6.appspot.com",
    messagingSenderId: "248393746302",
    appId: "1:248393746302:web:58484f116cb258966c952f",
    measurementId: "G-G60T405G69"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;