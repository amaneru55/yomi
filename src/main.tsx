import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css"
import App from "./App";
import Provider from "./provider";
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
