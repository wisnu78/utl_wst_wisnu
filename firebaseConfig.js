import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyDrJxV_FfcPnaEp9AOvbD24UY6bkN0llNw",
    authDomain: "tugas-restoran.firebaseapp.com",
    databaseURL: "https://tugas-restoran.firebaseio.com",
    projectId: "tugas-restoran",
    storageBucket: "tugas-restoran.appspot.com",
    messagingSenderId: "551019753581",
    appId: "1:551019753581:web:d91270083d6c1c237d8f64",
    measurementId: "G-Q0197PRYT6"
}
firebase.settings(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}