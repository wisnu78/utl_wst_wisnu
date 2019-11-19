import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyDrJxV_FfcPnaEp9AOvbD24UY6bkN0llNw",
    authDomain: "tugas-restoran.firebaseapp.com",
    databaseURL: "https://tugas-restoran.firebaseio.com",
    projectId: "tugas-restoran",
    storageBucket: "tugas-restoran.appspot.com",
    messagingSenderId: "551019753581",
    appId: "1:551019753581:web:d91270083d6c1c237d8f64",
    measurementId: "G-Q0197PRYT6"
  };
let app = Firebase.initializeApp(config)
export const db = app.firestore()