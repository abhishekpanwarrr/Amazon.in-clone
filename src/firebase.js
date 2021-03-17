import firebase from 'firebase'


const firebaseApp= firebase.initializeApp ({
    apiKey: "AIzaSyBWLCrLw7MQF7rMQ5YlP4J7BYT6-rF3LQ0",
    authDomain: "clone-22fed.firebaseapp.com",
    projectId: "clone-22fed",
    storageBucket: "clone-22fed.appspot.com",
    messagingSenderId: "617878505177",
    appId: "1:617878505177:web:06b0f8abf5f3289eeae0c8",
    measurementId: "G-W481WJRSPZ"
  })

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db, auth}