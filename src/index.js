import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addBlog, removeBlog, editBlog } from "./actions/blogs";
import "./firebase/firebaseConfiguration";

const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState());
});

const blog1 = store.dispatch(
  addBlog({ title: "Blog Title 1", text: "Blog Text 1" })
);
const blog2 = store.dispatch(
  addBlog({
    title: "Blog Title 2",
    text: "Blog Text 2",
    createdDate: Date.now(),
  })
);
store.dispatch(
  addBlog({
    title: "Blog Title 3",
    text: "Blog Text 3",
    createdDate: Date.now(),
  })
);
store.dispatch(
  addBlog({
    title: "Blog Title 4",
    text: "Blog Text 4",
    createdDate: Date.now(),
  })
);
store.dispatch(removeBlog(blog1.blog.id));
store.dispatch(editBlog(blog2.blog.id, { title: "Updated Blog" }));

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer my-token",
  },
  body: JSON.stringify({ title: "React POST Request Example" }),
};
fetch("https://localhost:7297/api/Account/Login", requestOptions)
  .then((response) => response.json())
  .then((data) => this.setState({ username: "Nicat", password: "Nicat123." }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
reportWebVitals();
