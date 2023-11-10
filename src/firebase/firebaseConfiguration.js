import firebase from "firebase/app";
import "firebase/database";

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
// database.ref().set({
//   title: "Blog title",
//   text: "Blog text",
//   author: {
//     name: "Nijat",
//     surname: "Soltanov",
//   },
// });
// database.ref().update({
//   title: "Updated Blog Text",
//   "author/name": "Nihad",
// });

// database.ref("products").push({
//   id: 1,
//   brand: "Apple",
//   model: "Iphone 12 pro",
// });
// database.ref("products").push({
//   id: 2,
//   brand: "Apple",
//   model: "Iphone 13 pro",
// });
// database.ref("products").push({
//   id: 3,
//   brand: "Apple",
//   model: "Iphone 14 pro",
// });

// database.ref("products").on("value", (snapshot) => {
//   const products = [];
//   snapshot.forEach((product) => {
//     products.push({
//       ID: product.key,
//       ...product.val(),
//     });
//   });
//   console.log(products);
// });

export { database as default };
