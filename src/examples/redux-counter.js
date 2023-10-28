import { createStore } from "redux";
const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action) => {
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
};
const store = createStore(counterReducer);
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
