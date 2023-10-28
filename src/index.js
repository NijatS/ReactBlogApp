import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const blogState = [];
const authState = {};

const addBlog = ({ title = "", text = "", createdDate = 0 }) => ({
  type: "Add_Blog",
  blog: {
    id: uuidv4(),
    title: title,
    text: text,
    createdDate: createdDate,
  },
});
const removeBlog = ({ id }) => ({
  type: "Remove_Blog",
  id: id,
});
const editBlog = (id, updates) => ({
  type: "Edit_Blog",
  id,
  updates,
});

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "Add_Blog":
      return [...state, action.blog];
    case "Remove_Blog":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "Edit_Blog":
      return state.map((blog) => {
        if (blog.id === action.id) {
          return { ...blog, ...action.updates };
        } else {
          return blog;
        }
      });
    default:
      return state;
  }
};
const authReducer = (state = authState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    blogs: blogReducer,
    auth: authReducer,
  })
);
store.subscribe(() => {
  console.log(store.getState());
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
store.dispatch(removeBlog({ id: blog1.blog.id }));
store.dispatch(editBlog(blog2.blog.id, { title: "Updated Blog" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);

reportWebVitals();
