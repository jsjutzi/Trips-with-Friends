import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Store/store.js";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
