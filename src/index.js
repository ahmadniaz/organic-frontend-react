import React from "react";
import ReactDOM from "react-dom";
import UserState from "./context/usercontext/UserState";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>,
  document.getElementById("root")
);
