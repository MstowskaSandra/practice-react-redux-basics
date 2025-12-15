// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import App from "./components/App";


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
