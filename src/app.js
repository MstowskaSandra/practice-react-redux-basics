// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

const initState = {
  message: "Działa!",
  time: new Date(),
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "addNewUser":
      const { name } = action.payload;
      const newId =
        state.users.length > 0
          ? Math.max(...state.users.map((u) => u.id)) + 1
          : 1;
      return {
        ...state,
        users: [...state.users, { id: newId, name }],
      };
    case "removeUser":
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== id),
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
