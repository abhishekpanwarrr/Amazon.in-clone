import firebase from 'firebase'


const firebaseApp= firebase.initializeApp ({
  apiKey: "AIzaSyAOtnsgnd3IFQxK0bhz5z1hYEKCj20jsj4",
  authDomain: "build-e6794.firebaseapp.com",
  projectId: "build-e6794",
  storageBucket: "build-e6794.appspot.com",
  messagingSenderId: "68693003288",
  appId: "1:68693003288:web:9c309ab9805d070e8c476d",
  measurementId: "G-8XF662N97G"
  })

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  export {db, auth}