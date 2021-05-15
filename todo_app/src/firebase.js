
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAthdo6IKCKN1KUKL7J3DZJzTOM2LLNTCg",
    authDomain: "todo-app-cp-60789.firebaseapp.com",
    projectId: "todo-app-cp-60789",
    storageBucket: "todo-app-cp-60789.appspot.com",
    messagingSenderId: "347509189069",
    appId: "1:347509189069:web:93b6e5273dc6f816b23c84",
    measurementId: "G-ZL06J08FR0"
  });
  
  const db = firebaseApp.firestore();

  export default db;