// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
const initState = {
  message: "Działa!",
  time: new Date(),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
