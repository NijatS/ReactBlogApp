import firebase from "firebase";
//import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCoZWzpiy3wlA7JMYbUlX7PXgxsIbkdY2Y",
  authDomain: "react-blog-app-719a8.firebaseapp.com",
  databaseURL: "https://react-blog-app-719a8-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-719a8",
  storageBucket: "react-blog-app-719a8.appspot.com",
  messagingSenderId: "762471661864",
  appId: "1:762471661864:web:c865853ef9d6ddac09501d",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
database.ref().set({
  title: "Blog title",
  text: "Blog text",
});
// const db = getDatabase();
// console.log(db);
// set(ref(db, "blogs"), {
//   title: "Blog title",
// });
