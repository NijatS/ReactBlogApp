import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import { createStore, combineReducers } from "redux";
import "./App.css";

const state = {
  blogs: [
    {
      id: 1,
      title: "Blog Title 1",
      text: "Blog Text 1",
      createdDate: NaN,
    },
  ],
  auth: {
    userId: "1",
    username: "nijat",
    email: "nicatsoltanli03@gmail.com",
  },
};

const blogState = [];
const authState = {};

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
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

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);

reportWebVitals();
