import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import { createStore } from "redux";
import "./App.css";

const initialState = {
  count: 0,
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      const payload = typeof action.payload === "number" ? action.payload : 1;
      return { count: state.count + payload };
    case "Decrement":
      return { count: state.count - payload };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
});
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "Increment",
  payload: 10,
});
store.dispatch({
  type: "Increment",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);

reportWebVitals();
