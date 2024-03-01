import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-3abz3yswvydie30m.us.auth0.com"
    clientId="GcIDMx8S8y1CWMT99yRs1qlj7RvTQRik"
    redirectUri={window.location.origin}
    audience="ExpressAPI22022024"
    scope="openId profile email"
  >
    <App />
  </Auth0Provider>
);
