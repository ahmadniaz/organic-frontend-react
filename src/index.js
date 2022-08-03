import React from "react";
import ReactDOM from "react-dom";
import UserState from "./context/usercontext/UserState";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </UserState>
  </React.StrictMode>,
  document.getElementById("root")
);
