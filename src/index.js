import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import store from "./store/Store";
import "./assets/css/tailwind.css";
import "./styles/main.scss";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
   <Provider store={store}>
      <HashRouter>
         <App />
      </HashRouter>
   </Provider>,
   document.getElementById("root")
);
serviceWorkerRegistration.register();
