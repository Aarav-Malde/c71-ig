import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyBLYJun-qjz3pv0XFxNkvZ2YAX2yGXc8rs",
  authDomain: "complaint-forum-8e469.firebaseapp.com",
  projectId: "complaint-forum-8e469",
  storageBucket: "complaint-forum-8e469.appspot.com",
  messagingSenderId: "633034541014",
  appId: "1:633034541014:web:e28abab7f297108e3a4677"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

