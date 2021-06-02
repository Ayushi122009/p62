import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMHlajjd_LnaYLPr80zqi6Y79lhCQYSLI",
  authDomain: "school-attendence-app-a92a2.firebaseapp.com",
  databaseURL: "https://school-attendence-app-a92a2-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-a92a2",
  storageBucket: "school-attendence-app-a92a2.appspot.com",
  messagingSenderId: "249836662582",
  appId: "1:249836662582:web:2038c6fad0291bbe94cd97"
};

// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default firebase.database();
